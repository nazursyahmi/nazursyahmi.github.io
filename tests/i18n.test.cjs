const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const script = path.join(root, 'assets/js/i18n.js');

test('every public translation key has nonempty Malay copy', () => {
  assert.ok(fs.existsSync(script), 'shared translation module exists');
  const source = fs.readFileSync(script, 'utf8');
  const dictionary = JSON.parse(source.match(/const messages = (\{[\s\S]*?\n\});/)[1]);
  for (const file of ['index.html', 'contact.html', 'notes.html', 'projects.html', 'projects/smart-iot-datalogger.html', 'projects/smart-rice-machine.html', '404.html']) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    for (const match of html.matchAll(/data-i18n-(?:text|aria-label|alt)="([^"]+)"/g)) {
      for (const key of match[1].split(' ')) if (key !== '-') assert.ok(dictionary[key]?.trim(), `${file}: ${key}`);
    }
  }
});

test('all seven pages provide progressive language controls and a valid translation script path', () => {
  for (const file of ['index.html', 'contact.html', 'notes.html', 'projects.html', 'projects/smart-iot-datalogger.html', 'projects/smart-rice-machine.html', '404.html']) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    assert.match(html, /data-language="en"/, file);
    assert.match(html, /data-language="ms"/, file);
    assert.match(html, /class="language-switch"[^>]*hidden/, file);
    const match = html.match(/src="([^"]*i18n\.js)"/);
    assert.ok(match, `${file} loads translations`);
    assert.ok(html.indexOf('data-language-status') < html.indexOf(match[0]), `${file} has its announcement region before initialization`);
    assert.ok(fs.existsSync(match[1].startsWith('/') ? path.join(root, match[1]) : path.resolve(root, path.dirname(file), match[1])));
  }
});

function load(saved, blocked = false) {
  const text = { nodeType: 3, nodeValue: ' Home ' };
  const heading = { dataset: { i18nText: 'nav.home' }, childNodes: [text] };
  const unknown = { dataset: { i18nText: 'missing.key' }, childNodes: [{ nodeType: 3, nodeValue: 'English fallback' }] };
  const group = { hidden: true };
  const status = { textContent: '' };
  const toggle = { attrs: { 'aria-expanded': 'false' }, getAttribute(k) { return this.attrs[k]; }, setAttribute(k, v) { this.attrs[k] = v; } };
  const buttons = ['en', 'ms'].map(language => ({ dataset: { language }, attrs: {}, setAttribute(k, v) { this.attrs[k] = v; }, addEventListener(k, cb) { this[k] = cb; } }));
  const urls = [
    'https://wa.me/60149466234?text=Hello%2C%20I%20visited%20your%20engineering%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project.%20Here%20are%20some%20details%20about%20my%20requirements%3A',
    'mailto:nazur.syahmi@gmail.com?subject=Engineering%20Project%20Inquiry%20%E2%80%94%20Portfolio&body=Project%20objective%3A',
    'mailto:nazur.syahmi@gmail.com'
  ];
  const links = urls.map(href => ({ href, getAttribute() { return this.href; }, setAttribute(k, v) { this[k] = v; } }));
  const store = { value: saved, getItem() { if (blocked) throw Error('blocked'); return this.value; }, setItem(k, v) { if (blocked) throw Error('blocked'); this.value = v; } };
  const doc = {
    documentElement: { lang: 'en' },
    querySelectorAll(selector) {
      if (selector === '[data-i18n-text]') return [heading, unknown];
      if (selector === '[data-language]') return buttons;
      if (selector === '.language-switch') return [group];
      if (selector.startsWith('a[')) return links;
      return [];
    },
    querySelector(selector) { return selector === '.nav-toggle' ? toggle : status; }
  };
  const context = { document: doc, localStorage: store, URL, URLSearchParams, window: {} };
  assert.ok(fs.existsSync(script), 'shared translation module exists');
  vm.runInNewContext(fs.readFileSync(script, 'utf8'), context);
  return { text, unknown, group, status, toggle, buttons, links, urls, store, doc, api: context.window.PortfolioI18n };
}

test('English default, editable BM contact templates, and exact English restoration', () => {
  const p = load(null);
  assert.equal(p.doc.documentElement.lang, 'en');
  assert.equal(p.group.hidden, false);
  p.buttons[1].click();
  assert.equal(p.text.nodeValue.trim(), 'Utama');
  assert.equal(p.doc.documentElement.lang, 'ms');
  assert.equal(p.buttons[1].attrs['aria-pressed'], 'true');
  assert.equal(p.store.value, 'ms');
  assert.equal(p.unknown.childNodes[0].nodeValue, 'English fallback');
  assert.match(p.status.textContent, /Bahasa Melayu/);
  const wa = new URL(p.links[0].href);
  assert.equal(wa.hostname, 'wa.me');
  assert.equal(wa.pathname, '/60149466234');
  assert.match(wa.searchParams.get('text'), /projek/);
  const email = new URL(p.links[1].href);
  assert.equal(email.pathname, 'nazur.syahmi@gmail.com');
  assert.match(email.searchParams.get('subject'), /Projek/);
  assert.match(email.searchParams.get('body'), /Objektif projek:/);
  assert.equal(p.links[2].href, p.urls[2], 'bare mailto remains direct');
  p.toggle.attrs['aria-expanded'] = 'true';
  p.api.updateNavigationLabel();
  assert.equal(p.toggle.attrs['aria-label'], 'Tutup navigasi');
  p.buttons[0].click();
  assert.equal(p.text.nodeValue, ' Home ');
  assert.deepEqual(p.links.map(l => l.href), p.urls);
});

test('saved language survives a page load; invalid and blocked storage safely fall back', () => {
  assert.equal(load('ms').doc.documentElement.lang, 'ms');
  assert.equal(load('invalid').doc.documentElement.lang, 'en');
  const p = load('ms', true);
  assert.equal(p.doc.documentElement.lang, 'en');
  p.buttons[1].click();
  assert.equal(p.doc.documentElement.lang, 'ms');
});
