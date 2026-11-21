/* منيو رقمي — الطلب عبر واتساب | الإعدادات في js/config.js والأصناف في js/menu.js */
(() => {
'use strict';
const R = window.RESTAURANT, CATS = window.CATS, MENU = window.MENU, ADDONS = window.ADDONS || [];
const $ = (s, r = document) => r.querySelector(s);
const stick = () => $('#top').offsetHeight + 10 + $('#catsBar').offsetHeight + 8;
const maskNum = (p) => String(p).replace(/\d{3}$/, '***');
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem('abo.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('abo.' + k, JSON.stringify(v)); } catch (e) {} }
};

/* ---------- الأيقونات ---------- */
const P = {
  cloche: 'M3 18h18M5 18a7 7 0 0 1 14 0M12 8V6M9.5 6h5',
  fb: 'M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7z',
  ig: 'M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM16.5 7.5h.01',
  plus: 'M12 5v14M5 12h14', minus: 'M5 12h14', x: 'M6 6l12 12M18 6L6 18',
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4',
  moon: 'M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z',
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  pin: 'M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
  bag: 'M6 8h12l-1 12H7L6 8zM9 8a3 3 0 0 1 6 0',
  cart: 'M2.5 4h2.6l2.3 10.6a1.6 1.6 0 0 0 1.6 1.3h8.4a1.6 1.6 0 0 0 1.6-1.2L20.8 8H6M9.8 20.3h.01M17 20.3h.01',
  chevl: 'M15 5l-7 7 7 7',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  nav: 'M3 11l18-8-8 18-2-8-8-2z', up: 'M6 14l6-6 6 6',
  trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
  table: 'M4 9h16M6 9v10M18 9v10M3 9l2-4h14l2 4',
  moto: 'M5 17a2.5 2.5 0 1 0 0 .01M19 17a2.5 2.5 0 1 0 0 .01M7.5 17h6l3-7h-5M13 10l-2-4H8',
  store: 'M4 10l1.5-5h13L20 10M4 10v9h16v-9M4 10c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3',
  wa: 'M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z'
};
const ic = (n, style) => `<svg viewBox="0 0 24 24" aria-hidden="true"${style ? ' style="' + style + '"' : ''}><path d="${P[n]}"/></svg>`;
const icFill = (n) => ic(n, 'fill:currentColor;stroke:none');

/* ---------- النصوص ---------- */
const TX = {
  ar: {
    dir: 'rtl', langBtn: 'EN', navMenu: 'المنيو', navLoc: 'الموقع', navCall: 'اتصل بنا', topCta: 'اطلب الآن', hungry: 'جوعان؟ اطلب الآن', hungrySub: 'اختر أطباقك وأرسل الطلب عبر واتساب في دقيقة', fMenu: 'المنيو', fContact: 'تواصل معنا', toTop: 'للأعلى', kicker: 'المنيو الرقمي', heroOrder: 'اطلب الآن', heroMap: 'الموقع والخريطة', heroCall: 'اتصال', hello: 'أهلاً بك في', qaWa: 'واتساب', qaLoc: 'الموقع', qaFb: 'فيسبوك', qaIg: 'إنستجرام',
    perks: ['الطلب عبر واتساب', 'توصيل أو استلام أو داخل المطعم', 'الموقع على خرائط جوجل'],
    search: 'ابحث عن طبق…', all: 'الكل', from: 'ابتداءً من', noRes: 'لا توجد أصناف مطابقة لبحثك.',
    open: 'مفتوح الآن', closed: 'مغلق الآن', until: 'حتى', opensAt: 'يفتح',
    size: 'اختر الحجم', extras: 'إضافات', note: 'ملاحظات على الطلب', notePh: 'مثال: بدون بصل', addCart: 'أضف إلى السلة',
    added: 'تمت الإضافة إلى السلة', cartBtn: 'سلة الطلب', cartOpen: 'عرض السلة', cartHint: 'اضغط للمراجعة وإرسال الطلب', cartTitle: 'سلة الطلب', empty: 'سلتك فارغة، اختر أطباقك من المنيو.',
    remove: 'حذف', clear: 'إفراغ السلة', type: 'نوع الطلب',
    t: { delivery: 'توصيل', takeaway: 'استلام', dine: 'داخل المطعم' },
    name: 'الاسم', phone: 'رقم الجوال', address: 'العنوان بالتفصيل', table: 'رقم الطاولة', shareLoc: 'مشاركة موقعي', locOk: 'تم تحديد موقعك', locErr: 'تعذّر تحديد الموقع، اكتب العنوان يدويًا.',
    sub: 'المجموع الفرعي', fee: 'رسوم التوصيل', vat: 'الضريبة', total: 'الإجمالي', send: 'إرسال الطلب عبر واتساب',
    payTitle: 'ادفع عند الاستلام أو بإحدى الطرق وأرفق الإيصال', payVf: 'ادفع من خلال فودافون كاش', payIp: 'ادفع من خلال انســـتا بـــاي', payNumVf: 'رقم فودافون كاش', payNumIp: 'عنوان إنستا باي', copy: 'نسخ', copied: 'تم النسخ', payHint: 'حوّل الإجمالي، ثم أرسل صورة الإيصال في محادثة الواتساب بعد الضغط على «إرسال الطلب».', payMsgVf: 'فودافون كاش', payMsgIp: 'إنستا باي',
    closedWarn: 'المطعم مغلق حاليًا — يمكنك إرسال الطلب وسيتم الرد عند الفتح.',
    reqName: 'اكتب اسمك', reqPhone: 'اكتب رقم جوال صحيح', reqAddr: 'اكتب عنوان التوصيل', reqTable: 'اكتب رقم الطاولة',
    sent: 'تم تجهيز طلبك، أكمل الإرسال من واتساب',
    info: 'الموقع والتواصل', addrL: 'العنوان', hoursL: 'مواعيد العمل', daily: 'يوميًا', phoneL: 'الهاتف / واتساب',
    openMaps: 'فتح في خرائط جوجل', dirs: 'الاتجاهات', callBtn: 'اتصال', waBtn: 'واتساب',
    dev: 'تصميم وتطوير', am: 'ص', pm: 'م', cur: R.currencyAr, qtyL: 'الكمية'
  },
  en: {
    dir: 'ltr', langBtn: 'ع', navMenu: 'Menu', navLoc: 'Location', navCall: 'Call us', topCta: 'Order now', hungry: 'Hungry? Order now', hungrySub: 'Pick your dishes and send the order via WhatsApp in a minute', fMenu: 'Menu', fContact: 'Contact us', toTop: 'Back to top', kicker: 'Digital Menu', heroOrder: 'Order now', heroMap: 'Location & map', heroCall: 'Call', hello: 'Welcome to', qaWa: 'WhatsApp', qaLoc: 'Location', qaFb: 'Facebook', qaIg: 'Instagram',
    perks: ['Order via WhatsApp', 'Delivery, pickup or dine-in', 'Find us on Google Maps'],
    search: 'Search for a dish…', all: 'All', from: 'From', noRes: 'No dishes match your search.',
    open: 'Open now', closed: 'Closed now', until: 'until', opensAt: 'opens',
    size: 'Choose size', extras: 'Extras', note: 'Order notes', notePh: 'e.g. no onions', addCart: 'Add to cart',
    added: 'Added to cart', cartBtn: 'Your order', cartOpen: 'View cart', cartHint: 'Tap to review & send your order', cartTitle: 'Your order', empty: 'Your cart is empty — pick dishes from the menu.',
    remove: 'Remove', clear: 'Clear cart', type: 'Order type',
    t: { delivery: 'Delivery', takeaway: 'Pickup', dine: 'Dine-in' },
    name: 'Name', phone: 'Mobile number', address: 'Full address', table: 'Table number', shareLoc: 'Share my location', locOk: 'Location captured', locErr: 'Could not get your location, please type the address.',
    sub: 'Subtotal', fee: 'Delivery fee', vat: 'VAT', total: 'Total', send: 'Send order via WhatsApp',
    payTitle: 'Pay on delivery or below, and attach the receipt', payVf: 'Pay with Vodafone Cash', payIp: 'Pay with InstaPay', payNumVf: 'Vodafone Cash number', payNumIp: 'InstaPay address', copy: 'Copy', copied: 'Copied', payHint: 'Transfer the total, then send the receipt photo in the WhatsApp chat after tapping “Send order”.', payMsgVf: 'Vodafone Cash', payMsgIp: 'InstaPay',
    closedWarn: 'We are closed right now — you can still send your order and we will reply when we open.',
    reqName: 'Please enter your name', reqPhone: 'Please enter a valid mobile number', reqAddr: 'Please enter the delivery address', reqTable: 'Please enter the table number',
    sent: 'Your order is ready — finish sending it in WhatsApp',
    info: 'Location & contact', addrL: 'Address', hoursL: 'Opening hours', daily: 'Daily', phoneL: 'Phone / WhatsApp',
    openMaps: 'Open in Google Maps', dirs: 'Directions', callBtn: 'Call', waBtn: 'WhatsApp',
    dev: 'Designed & developed by', am: 'AM', pm: 'PM', cur: R.currencyEn, qtyL: 'Qty'
  }
};
let lang = store.get('lang', R.defaultLang || 'ar'); if (!TX[lang]) lang = 'ar';
/* يبدأ المنيو دائمًا بالوضع الافتراضي (الغامق)؛ التبديل يسري على الجلسة الحالية فقط */
let theme = R.defaultTheme || 'dark'; store.set('theme', theme);
const t = () => TX[lang];
const nm = (o) => (lang === 'ar' ? o.ar : o.en);
const ds = (o) => (lang === 'ar' ? o.descAr : o.descEn);
const money = (n) => (Math.round(n * 100) / 100).toString().replace(/\.0+$/, '') + ' ' + t().cur;

/* ---------- الحالة ---------- */
let cart = store.get('cart', []);
let q = '';
let loc = null;
const _sp = store.get('profile', {}) || {};
const profile = { name: '', phone: '', address: '', table: '', note: '', type: (R.orderTypes || ['delivery']).includes(_sp.type) ? _sp.type : (R.orderTypes || ['delivery'])[0], pay: _sp.pay === 'vodafone' || _sp.pay === 'instapay' ? _sp.pay : '' };
if (!(R.orderTypes || []).includes(profile.type)) profile.type = R.orderTypes[0];
const saveCart = () => store.set('cart', cart);
/* لا تُحفظ بيانات العميل الشخصية (الاسم والجوال والعنوان)؛ يُحفظ نوع الطلب وطريقة الدفع فقط */
const saveProfile = () => store.set('profile', { type: profile.type, pay: profile.pay });
saveProfile();

/* ---------- مواعيد العمل ---------- */
const mins = (s) => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
function fmt(s) {
  const [h, m] = s.split(':').map(Number); const pm = h >= 12; const h12 = h % 12 === 0 ? 12 : h % 12;
  return h12 + ':' + String(m).padStart(2, '0') + ' ' + (pm ? t().pm : t().am);
}
function openState() {
  let nowM;
  try {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: R.timezone, hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    nowM = Number(parts.find((p) => p.type === 'hour').value) % 24 * 60 + Number(parts.find((p) => p.type === 'minute').value);
  } catch (e) { const d = new Date(); nowM = d.getHours() * 60 + d.getMinutes(); }
  const o = mins(R.open); let c = mins(R.close); if (c <= o) c += 1440;
  const isOpen = (nowM >= o && nowM < c) || (nowM + 1440 >= o && nowM + 1440 < c);
  return isOpen;
}

/* ---------- التصيير الثابت ---------- */
function renderStatic() {
  const T = t();
  document.documentElement.lang = lang; document.documentElement.dir = T.dir; document.documentElement.dataset.theme = theme;
  const mt = document.querySelector('meta[name=theme-color]'); if (mt) mt.content = theme === 'dark' ? '#11100D' : '#F6F1E7';
  document.title = (lang === 'ar' ? R.nameAr : R.nameEn) + (lang === 'ar' ? ' | المنيو والطلب عبر واتساب' : ' | Menu & WhatsApp ordering');
  $('#brandName').textContent = nm({ ar: R.nameAr, en: R.headerNameEn || R.nameEn });
  $('#brandSub').textContent = (lang === 'ar' ? R.sloganAr : R.sloganEn) || (lang === 'ar' ? R.nameEn : R.nameAr);
  $('#topNav').innerHTML = `<a href="#menu">${esc(T.navMenu)}</a><a href="#info">${esc(T.navLoc)}</a><a href="tel:${esc(R.phone.replace(/\s/g, ''))}">${esc(T.navCall)}</a>`;
  $('#topCta').innerHTML = icFill('wa') + `<span>${esc(T.topCta)}</span>`;
  $('#langBtn').textContent = T.langBtn;
  $('#themeBtn').innerHTML = ic(theme === 'dark' ? 'sun' : 'moon');
  const on = openState();
  const st = $('#status'); st.className = 'status' + (on ? '' : ' off');
  st.textContent = on ? `${T.open} · ${T.until} ${fmt(R.close)}` : `${T.closed} · ${T.opensAt} ${fmt(R.open)}`;
  const hs = $('#heroStatus'); hs.className = 'status hstatus' + (on ? '' : ' off'); hs.textContent = st.textContent;
  $('#heroHello').textContent = T.hello;
  $('#heroTitle').textContent = nm({ ar: R.nameAr, en: R.nameEn });
  $('#heroSlogan').textContent = (lang === 'ar' ? R.sloganAr : R.sloganEn) || '';
  $('#heroOrder').innerHTML = ic('cloche') + esc(T.heroOrder);
  const call = $('#heroCall'); call.innerHTML = ic('phone') + esc(T.heroCall); call.href = 'tel:' + R.phone.replace(/\s/g, '');
  const qa = [
    { href: 'https://wa.me/' + R.whatsapp, icon: icFill('wa'), label: T.qaWa },
    { href: R.mapsUrl, icon: ic('pin'), label: T.qaLoc },
    { href: R.facebook, icon: ic('fb'), label: T.qaFb },
    { href: R.instagram, icon: ic('ig'), label: T.qaIg }
  ].filter((x) => x.href);
  $('#quickActions').innerHTML = qa.map((x) => `<a href="${esc(x.href)}" target="_blank" rel="noopener" aria-label="${esc(x.label)}" title="${esc(x.label)}">${x.icon}<span>${esc(x.label)}</span></a>`).join('');
  $('#searchIc').innerHTML = ic('search');
  $('#q').placeholder = T.search;
  $('#infoTitle').textContent = T.info;
  renderInfo(); renderFoot();
  $('#mapFb').innerHTML = `<div class="mf-in"><span class="mf-pin">${ic('pin')}</span><b>${esc(nm({ ar: R.nameAr, en: R.nameEn }))}</b><small>${esc(lang === 'ar' ? R.addressAr : R.addressEn)}</small><a class="paybtn locb" href="${esc(R.mapsUrl)}" target="_blank" rel="noopener"><span class="pl">${ic('pin')}</span><span class="pt">${esc(T.openMaps)}</span></a></div>`;
  $('#mapFrame').src = $('#mapFrame').src || `https://maps.google.com/maps?q=${R.lat},${R.lng}&z=16&hl=${lang}&output=embed`;
}
/* إن مُنع تضمين الخريطة (سياسة أمان في المنصة المستضيفة) تظهر بطاقة بديلة بزر يفتح خرائط جوجل */
function showMapFb() { const f = $('#mapFb'), m = $('#mapFrame'); if (f) f.hidden = false; if (m) m.hidden = true; }
document.addEventListener('securitypolicyviolation', (e) => { if (/google/i.test(e.blockedURI || '')) showMapFb(); });
function renderInfo() {
  const T = t(); const tel = R.phone.replace(/\s/g, '');
  $('#infoList').innerHTML = `
    <li><span class="ic">${ic('pin')}</span><div><b>${esc(T.addrL)}</b><span>${esc(lang === 'ar' ? R.addressAr : R.addressEn)}</span></div></li>
    <li><span class="ic">${ic('clock')}</span><div><b>${esc(T.hoursL)}</b><span>${esc(T.daily)}: ${esc(fmt(R.open))} – ${esc(fmt(R.close))}</span></div></li>
    <li><span class="ic">${ic('phone')}</span><div><b>${esc(T.phoneL)}</b><span dir="ltr" style="unicode-bidi:plaintext">${esc(maskNum(R.phone))}</span></div></li>`;
  $('#infoBtn').innerHTML = `
    <a class="paybtn locb wide" href="${esc(R.mapsUrl)}" target="_blank" rel="noopener"><span class="pl">${ic('pin')}</span><span class="pt">${esc(T.openMaps)}</span></a>
    <a class="paybtn dirb" href="https://www.google.com/maps/dir/?api=1&destination=${R.lat},${R.lng}" target="_blank" rel="noopener"><span class="pl s">${ic('nav')}</span><span class="pt">${esc(T.dirs)}</span></a>
    <a class="paybtn callb" href="tel:${esc(tel)}"><span class="pl s">${ic('phone')}</span><span class="pt">${esc(T.callBtn)}</span></a>
    <a class="paybtn wa wide" href="https://wa.me/${esc(R.whatsapp)}" target="_blank" rel="noopener"><span class="pl">${icFill('wa')}<b>WhatsApp</b></span><span class="pt">${esc(T.waBtn)}</span></a>`;
}
/* يجعل صف أيقونات التواصل بعرض اسم المطعم بالضبط */
function syncSoc() {
  const n = $('.f-name'), s = $('.f-soc'); if (!n || !s) return;
  let w = n.getBoundingClientRect().width;
  /* ديسكتوب وتابلت عريض: من أول الجملة إلى آخرها في سطر حقوق النشر فوق الأيقونات */
  const c = $('.f-copy.in-brand');
  if (c && window.innerWidth > 880) {
    const r = document.createRange(); r.selectNodeContents(c);
    const rects = [...r.getClientRects()].filter((x) => x.width > 0);
    if (rects.length) w = Math.max(...rects.map((x) => x.right)) - Math.min(...rects.map((x) => x.left));
  }
  s.style.width = Math.ceil(w) + 'px';
}
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => syncSoc());
window.addEventListener('resize', () => syncSoc());
function renderFoot() {
  const T = t(); const tel = R.phone.replace(/\s/g, ''); const nameT = nm({ ar: R.nameAr, en: R.nameEn });
  const on = openState();
  const copy = `<span class="f1">© ${new Date().getFullYear()} ${esc(nameT)}</span><span class="f2"><i class="dash"> — </i>${esc(T.dev)} <a href="https://montasserharby.com/" target="_blank" rel="noopener">${lang === 'ar' ? 'منتصر حربي' : 'Montasser Harby'}</a></span>`;
  $('#foot').innerHTML = `
  <div class="wrap">
    <div class="f-grid">
      <div class="f-col"><h4>${esc(T.fMenu)}</h4><div class="f-links">${CATS.map((c) => `<a href="#c-${c.id}" data-go="${c.id}">${esc(nm(c))}</a>`).join('')}</div></div>
      <div class="f-brand">
        <b class="f-name">${esc(nameT)}</b>
        <p>${esc(lang === 'ar' ? R.taglineAr : R.taglineEn)}</p>
        <div class="f-copy in-brand">${copy}</div>
        <div class="f-soc">
          <a href="https://wa.me/${esc(R.whatsapp)}" target="_blank" rel="noopener" aria-label="WhatsApp">${icFill('wa')}</a>
          <a href="tel:${esc(tel)}" aria-label="${esc(T.callBtn)}">${ic('phone')}</a>
          <a href="${esc(R.mapsUrl)}" target="_blank" rel="noopener" aria-label="${esc(T.openMaps)}">${ic('pin')}</a>
          ${R.facebook ? `<a href="${esc(R.facebook)}" target="_blank" rel="noopener" aria-label="Facebook">${ic('fb')}</a>` : ''}
          ${R.instagram ? `<a href="${esc(R.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">${ic('ig')}</a>` : ''}
        </div>
      </div>
      <div class="f-col"><h4>${esc(T.fContact)}</h4>
        <ul class="f-info">
          <li>${ic('pin')}<span>${esc(lang === 'ar' ? R.addressAr : R.addressEn)}</span></li>
          <li>${ic('clock')}<span>${esc(fmt(R.open))} – ${esc(fmt(R.close))}</span></li>
          <li>${ic('phone')}<span dir="ltr">${esc(maskNum(R.phone))}</span></li>
        </ul>
      </div>
    </div>
    <div class="f-bar">
      <div class="f-copy in-bar">${copy}</div>
      <button class="to-top" type="button" data-top aria-label="${esc(T.toTop)}">${ic('up')}</button>
    </div>
  </div>`;
  observe(); syncSoc();
}

/* ---------- المنيو ---------- */
function matches(p) {
  if (!q) return true; const s = q.toLowerCase();
  return (p.ar + ' ' + p.en + ' ' + p.descAr + ' ' + p.descEn).toLowerCase().includes(s);
}
function needsChoice(p) { return (p.sizes && p.sizes.length) || (p.addons && p.addons.length); }
function renderMenu() {
  const T = t(); let html = ''; const shown = [];
  CATS.forEach((c) => {
    const list = MENU.filter((p) => p.cat === c.id && matches(p));
    if (!list.length) return; shown.push(c);
    html += `<section class="sec" id="c-${c.id}" data-cat="${c.id}"><h2 class="h2">${esc(nm(c))}</h2><div class="grid">` +
      list.map((p, i) => `
      <article class="card rv" data-id="${p.id}" style="transition-delay:${Math.min(i, 5) * 60}ms" tabindex="0" role="button" aria-label="${esc(nm(p))}">
        <div class="card-img"><img src="${esc(p.img)}" alt="${esc(nm(p))}" loading="lazy" width="400" height="300"></div>
        <div class="card-b"><h3>${esc(nm(p))}</h3><p>${esc(ds(p))}</p>
          <div class="card-f"><span class="price">${p.sizes ? `<small>${esc(T.from)}</small> ` : ''}${esc(money(p.price))}</span><span class="add" aria-hidden="true">${ic('plus')}</span></div>
        </div>
      </article>`).join('') + '</div></section>';
  });
  $('#menu').innerHTML = html || `<div class="empty">${esc(T.noRes)}</div>`;
  $('#chips').innerHTML = shown.map((c) => `<button class="chip" type="button" data-go="${c.id}">${esc(nm(c))}</button>`).join('');
  observe(); spy();
}
let io;
function observe() {
  if (io) io.disconnect();
  io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: .05 }) : null;
  document.querySelectorAll('.rv').forEach((el) => { io ? io.observe(el) : el.classList.add('in'); });
}
function spy() {
  const secs = [...document.querySelectorAll('.sec')]; if (!secs.length) return;
  const y = window.scrollY + stick() + 4; let cur = secs[0];
  secs.forEach((s) => { if (s.offsetTop <= y) cur = s; });
  document.querySelectorAll('.chip').forEach((b) => {
    const on = b.dataset.go === cur.dataset.cat;
    if (on && !b.classList.contains('on')) { const box = $('#chips'); box.scrollTo({ left: b.offsetLeft - box.clientWidth / 2 + b.clientWidth / 2 - (lang === 'ar' ? 0 : 0), behavior: 'smooth' }); }
    b.classList.toggle('on', on);
  });
}

/* ---------- النوافذ ---------- */
let lastFocus = null;
function openSheet(html, view) {
  lastFocus = document.activeElement;
  $('#toast').classList.remove('on');
  const s = $('#sheet'); s.onchange = null; s.dataset.view = view || ''; s.innerHTML = html; s.hidden = false; $('#back').hidden = false; document.body.style.overflow = 'hidden'; s.scrollTop = 0;
}
function closeSheet() {
  $('#sheet').hidden = true; $('#back').hidden = true; document.body.style.overflow = ''; $('#sheet').innerHTML = ''; $('#sheet').onchange = null; $('#sheet').dataset.view = '';
  if (lastFocus && lastFocus.focus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) {} }
}
function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(toast.tm); toast.tm = setTimeout(() => el.classList.remove('on'), 1900); }

/* ---------- نافذة الصنف ---------- */
function openItem(id) {
  const p = MENU.find((x) => x.id === id); if (!p) return;
  if (!needsChoice(p)) { addLine(p, null, [], '', 1); toast(t().added); return; }
  const T = t(); const sizes = p.sizes || []; const adds = (p.addons || []).map((a) => ADDONS.find((x) => x.id === a)).filter(Boolean);
  openSheet(`
   <div class="sheet-h"><h3>${esc(nm(p))}</h3><button class="ibtn" data-close type="button" aria-label="close">${ic('x')}</button></div>
   <div class="sheet-b">
     <img class="sheet-img" src="${esc(p.img)}" alt="${esc(nm(p))}">
     <p class="sheet-d">${esc(ds(p))}</p>
     ${sizes.length ? `<div class="grp"><b>${esc(T.size)}</b>${sizes.map((s, i) => `<label class="opt"><span class="l"><input type="radio" name="size" value="${s.id}" ${i === 0 ? 'checked' : ''}>${esc(nm(s))}</span><span class="p">${s.add ? '+' + esc(money(s.add)) : esc(money(p.price))}</span></label>`).join('')}</div>` : ''}
     ${adds.length ? `<div class="grp"><b>${esc(T.extras)}</b>${adds.map((a) => `<label class="opt"><span class="l"><input type="checkbox" name="add" value="${a.id}">${esc(nm(a))}</span><span class="p">+${esc(money(a.add))}</span></label>`).join('')}</div>` : ''}
     <div class="field"><label for="itNote">${esc(T.note)}</label><textarea id="itNote" rows="2" placeholder="${esc(T.notePh)}"></textarea></div>
     <div class="qty" id="itQty" style="justify-self:start"><button type="button" data-q="-1" aria-label="-">${ic('minus')}</button><span id="itN">1</span><button type="button" data-q="1" aria-label="+">${ic('plus')}</button></div>
   </div>
   <div class="sheet-foot"><button class="btn btn-gold btn-block" id="itAdd" type="button"></button></div>`, 'item');
  let qty = 1;
  const calc = () => {
    const sz = sizes.find((s) => s.id === ($('input[name=size]:checked') || {}).value);
    const ex = [...document.querySelectorAll('input[name=add]:checked')].map((i) => i.value);
    const unit = p.price + (sz ? sz.add : 0) + ex.reduce((a, id2) => a + (ADDONS.find((x) => x.id === id2) || { add: 0 }).add, 0);
    $('#itAdd').innerHTML = `${ic('plus')}${esc(T.addCart)} · ${esc(money(unit * qty))}`;
    return { sz, ex };
  };
  calc();
  $('#sheet').onchange = calc;
  $('#itQty').onclick = (e) => { const b = e.target.closest('[data-q]'); if (!b) return; qty = Math.max(1, Math.min(30, qty + Number(b.dataset.q))); $('#itN').textContent = qty; calc(); };
  $('#itAdd').onclick = () => { const { sz, ex } = calc(); addLine(p, sz ? sz.id : null, ex, $('#itNote').value.trim(), qty); closeSheet(); toast(T.added); };
}
function unitPrice(p, size, extras) {
  const sz = (p.sizes || []).find((s) => s.id === size);
  return p.price + (sz ? sz.add : 0) + extras.reduce((a, id) => a + (ADDONS.find((x) => x.id === id) || { add: 0 }).add, 0);
}
function addLine(p, size, extras, note, qty) {
  const ex = [...extras].sort(); const key = [p.id, size || '', ex.join(','), note].join('|');
  const f = cart.find((l) => l.key === key);
  if (f) f.qty = Math.min(99, f.qty + qty); else cart.push({ key, id: p.id, size, extras: ex, note, qty });
  saveCart(); renderFab(); if (!$('#sheet').hidden && $('#sheet').dataset.view === 'cart') renderCart();
}

/* ---------- السلة ---------- */
const lineTotal = (l) => { const p = MENU.find((x) => x.id === l.id); return unitPrice(p, l.size, l.extras) * l.qty; };
function totals() {
  const sub = cart.reduce((a, l) => a + lineTotal(l), 0);
  const fee = profile.type === 'delivery' && sub > 0 ? (R.deliveryFee || 0) : 0;
  const vat = (R.vatPercent || 0) ? Math.round(sub * R.vatPercent) / 100 : 0;
  return { sub, fee, vat, total: sub + fee + vat };
}
function renderFab() {
  const f = $('#fab'); const n = cart.reduce((a, l) => a + l.qty, 0);
  document.body.classList.toggle('has-cart', n > 0);
  if (!n) { f.hidden = true; return; }
  const T = t(); f.hidden = false; f.setAttribute('aria-label', T.cartOpen);
  f.innerHTML = `<span class="l"><span class="ci">${ic('cart')}<span class="n">${n}</span></span><span class="lt"><b>${esc(T.cartOpen)}</b><small>${esc(T.cartHint)}</small></span></span><span class="r"><span class="tot">${esc(money(totals().sub))}</span><span class="go">${ic('chevl')}</span></span>`;
}
function lineHtml(l, i) {
  const p = MENU.find((x) => x.id === l.id); const T = t();
  const sz = (p.sizes || []).find((s) => s.id === l.size);
  const ex = l.extras.map((id) => ADDONS.find((a) => a.id === id)).filter(Boolean).map(nm);
  const det = [sz ? nm(sz) : '', ...ex].filter(Boolean).join(' · ');
  return `<div class="line"><div class="nm">${esc(nm(p))}</div><div class="pr">${esc(money(lineTotal(l)))}</div>
    ${det || l.note ? `<div class="ex">${esc(det)}${det && l.note ? '<br>' : ''}${l.note ? esc(l.note) : ''}</div>` : ''}
    <div class="ac"><div class="qty"><button type="button" data-cq="${i}|-1" aria-label="-">${ic('minus')}</button><span>${l.qty}</span><button type="button" data-cq="${i}|1" aria-label="+">${ic('plus')}</button></div>
    <button class="rm" type="button" data-rm="${i}">${ic('trash')}${esc(T.remove)}</button></div></div>`;
}
function payBlock(T) {
  const P = R.payments || {}; const sel = profile.pay;
  const btn = (k, img, label, nm2) => P[k] ? `<button class="paybtn ${k} ${sel === k ? 'on' : ''}" type="button" data-pay="${k}" aria-pressed="${sel === k}"><span class="pl"><img src="${img}" alt="${nm2}"></span><span class="pt">${esc(label)}</span></button>` : '';
  const det = sel && P[sel] ? `<div class="pay-d"><span>${esc(sel === 'vodafone' ? T.payNumVf : T.payNumIp)}</span><b dir="ltr" id="payVal">${esc(P[sel])}</b><button type="button" class="copy" data-copy="${esc(P[sel])}">${esc(T.copy)}</button><p>${esc(T.payHint)}</p></div>` : '';
  return `<div class="pay"><p class="pay-t">${esc(T.payTitle)}</p><div class="pay-b">${btn('vodafone', 'assets/img/pay-35ef2665.png', T.payVf, 'Vodafone Cash')}${btn('instapay', 'assets/img/pay-cd286ac6.png', T.payIp, 'InstaPay')}</div>${det}</div>`;
}
function openCart() { renderCart(true); }
function renderCart(first) {
  const T = t();
  if (!cart.length) { closeSheet(); return; }
  const types = R.orderTypes || ['delivery'];
  const tot = totals(); const on = openState();
  const keepScroll = !first && $('#sheet') ? $('#sheet').scrollTop : 0;
  const html = `
   <div class="sheet-h"><h3>${esc(T.cartTitle)}</h3><button class="ibtn" data-close type="button" aria-label="close">${ic('x')}</button></div>
   <div class="sheet-b">
     ${on ? '' : `<div class="warn">${esc(T.closedWarn)}</div>`}
     <div>${cart.map(lineHtml).join('')}</div>
     <div class="grp"><b>${esc(T.type)}</b><div class="seg" id="seg">${types.map((k) => `<button type="button" data-type="${k}" class="${profile.type === k ? 'on' : ''}">${ic({ delivery: 'moto', takeaway: 'store', dine: 'table' }[k])}${esc(T.t[k])}</button>`).join('')}</div></div>
     <div class="field"><label for="fName">${esc(T.name)}</label><input id="fName" autocomplete="name" value="${esc(profile.name)}"><div class="err" id="eName"></div></div>
     ${profile.type !== 'dine' ? `<div class="field"><label for="fPhone">${esc(T.phone)}</label><input id="fPhone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" style="text-align:start" value="${esc(profile.phone)}"><div class="err" id="ePhone"></div></div>` : ''}
     ${profile.type === 'delivery' ? `<div class="field"><label for="fAddr">${esc(T.address)}</label><textarea id="fAddr" rows="2" autocomplete="street-address">${esc(profile.address)}</textarea><div class="err" id="eAddr"></div>
        <div class="loc"><button class="paybtn locb" id="locBtn" type="button"><span class="pl">${ic('pin')}</span><span class="pt">${esc(T.shareLoc)}</span></button><small id="locMsg">${loc ? esc(T.locOk) : ''}</small></div></div>` : ''}
     ${profile.type === 'dine' ? `<div class="field"><label for="fTable">${esc(T.table)}</label><input id="fTable" inputmode="numeric" value="${esc(profile.table)}"><div class="err" id="eTable"></div></div>` : ''}
     <div class="field"><label for="fNote">${esc(T.note)}</label><textarea id="fNote" rows="2" placeholder="${esc(T.notePh)}">${esc(profile.note || '')}</textarea></div>
     <div class="tot"><div><span>${esc(T.sub)}</span><span>${esc(money(tot.sub))}</span></div>
       ${tot.fee ? `<div><span>${esc(T.fee)}</span><span>${esc(money(tot.fee))}</span></div>` : ''}
       ${tot.vat ? `<div><span>${esc(T.vat)} ${R.vatPercent}%</span><span>${esc(money(tot.vat))}</span></div>` : ''}
       <div class="g"><span>${esc(T.total)}</span><span>${esc(money(tot.total))}</span></div></div>
     ${R.payments ? payBlock(T) : ''}
   </div>
   <div class="sheet-foot"><button class="paybtn wa" id="sendBtn" type="button"><span class="pl">${icFill('wa')}<b>WhatsApp</b></span><span class="pt">${esc(T.send)}</span></button></div>`;
  const s = $('#sheet');
  if (first || s.hidden) openSheet(html, 'cart'); else { s.innerHTML = html; s.scrollTop = keepScroll; s.dataset.view = 'cart'; }
}
function readForm() {
  const g = (id) => { const e = $(id); return e ? e.value.trim() : null; };
  const n = g('#fName'); if (n !== null) profile.name = n;
  const ph = g('#fPhone'); if (ph !== null) profile.phone = ph;
  const a = g('#fAddr'); if (a !== null) profile.address = a;
  const tb = g('#fTable'); if (tb !== null) profile.table = tb;
  const nt = g('#fNote'); if (nt !== null) profile.note = nt;
  saveProfile();
}
function validate() {
  const T = t(); let ok = true;
  const set = (id, msg) => { const e = $(id); if (e) e.textContent = msg || ''; if (msg) ok = false; };
  set('#eName', ''); set('#ePhone', ''); set('#eAddr', ''); set('#eTable', '');
  if (!profile.name) set('#eName', T.reqName);
  if (profile.type !== 'dine' && profile.phone.replace(/\D/g, '').length < 8) set('#ePhone', T.reqPhone);
  if (profile.type === 'delivery' && !profile.address && !loc) set('#eAddr', T.reqAddr);
  if (profile.type === 'dine' && !profile.table) set('#eTable', T.reqTable);
  if (!ok) { const first = $('.err:not(:empty)'); if (first) first.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
  return ok;
}
/* نص رسالة واتساب يُكتب دائمًا بالعربية ليقرأه المطعم بسهولة */
function buildMessage() {
  const TA = TX.ar; const tot = totals(); const cur = R.currencyAr; const m = (n) => (Math.round(n * 100) / 100).toString().replace(/\.0+$/, '') + ' ' + cur;
  const L = [`*طلب جديد — ${R.nameAr}*`, `نوع الطلب: ${TA.t[profile.type]}`, `الاسم: ${profile.name}`];
  if (profile.type !== 'dine') L.push(`الجوال: ${profile.phone}`);
  if (profile.type === 'delivery') { if (profile.address) L.push(`العنوان: ${profile.address}`); if (loc) L.push(`الموقع على الخريطة: https://maps.google.com/?q=${loc.lat},${loc.lng}`); }
  if (profile.type === 'dine') L.push(`رقم الطاولة: ${profile.table}`);
  L.push('', '*الأصناف:*');
  cart.forEach((l, i) => {
    const p = MENU.find((x) => x.id === l.id); const sz = (p.sizes || []).find((s) => s.id === l.size);
    const ex = l.extras.map((id) => ADDONS.find((a) => a.id === id)).filter(Boolean).map((a) => a.ar);
    const det = [sz ? sz.ar : '', ...ex].filter(Boolean).join('، ');
    L.push(`${i + 1}) ${l.qty}× ${p.ar}${det ? ' (' + det + ')' : ''} — ${m(lineTotal(l))}`);
    if (l.note) L.push(`   ملاحظة: ${l.note}`);
  });
  if (profile.note) L.push('', `ملاحظات عامة: ${profile.note}`);
  L.push('', `المجموع الفرعي: ${m(tot.sub)}`);
  if (tot.fee) L.push(`رسوم التوصيل: ${m(tot.fee)}`);
  if (tot.vat) L.push(`الضريبة: ${m(tot.vat)}`);
  L.push(`*الإجمالي: ${m(tot.total)}*`);
  if (profile.pay === 'vodafone' || profile.pay === 'instapay') L.push(`طريقة الدفع: ${profile.pay === 'vodafone' ? TA.payMsgVf : TA.payMsgIp} (سأرسل صورة الإيصال هنا)`);
  return L.join('\n');
}
function send() {
  readForm(); if (!validate()) return;
  const url = `https://wa.me/${R.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
  const lk = document.createElement('a'); lk.href = url; lk.target = '_blank'; lk.rel = 'noopener'; document.body.appendChild(lk); lk.click(); lk.remove(); toast(t().sent);
}

/* ---------- الأحداث ---------- */
document.addEventListener('click', (e) => {
  const tg = e.target;
  if (tg.closest('[data-close]') || tg.id === 'back') return closeSheet();
  const go = tg.closest('[data-go]'); if (go) { e.preventDefault(); const el = document.getElementById('c-' + go.dataset.go); if (el) window.scrollTo({ top: el.offsetTop - stick(), behavior: 'smooth' }); return; }
  const card = tg.closest('.card'); if (card) return openItem(card.dataset.id);
  const cq = tg.closest('[data-cq]'); if (cq) { readForm(); const [i, d] = cq.dataset.cq.split('|').map(Number); cart[i].qty += d; if (cart[i].qty <= 0) cart.splice(i, 1); saveCart(); renderFab(); return renderCart(); }
  const rm = tg.closest('[data-rm]'); if (rm) { readForm(); cart.splice(Number(rm.dataset.rm), 1); saveCart(); renderFab(); return renderCart(); }
  const ty = tg.closest('[data-type]'); if (ty) { readForm(); profile.type = ty.dataset.type; saveProfile(); return renderCart(); }
  const pb = tg.closest('[data-pay]'); if (pb) { readForm(); profile.pay = profile.pay === pb.dataset.pay ? '' : pb.dataset.pay; saveProfile(); return renderCart(); }
  const cp = tg.closest('[data-copy]');
  if (cp) {
    const v = cp.dataset.copy; const ok = () => toast(t().copied);
    const fb = () => { const el = $('#payVal'); if (el) { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); } };
    try { navigator.clipboard.writeText(v).then(ok, fb); } catch (e) { fb(); }
    return;
  }
  if (tg.closest('#sendBtn')) return send();
  if (tg.closest('#clearBtn')) { cart = []; saveCart(); renderFab(); return closeSheet(); }
  if (tg.closest('#locBtn')) {
    const T = t(); const msg = $('#locMsg');
    if (!navigator.geolocation) { msg.textContent = T.locErr; msg.style.color = '#f08a80'; return; }
    navigator.geolocation.getCurrentPosition((pos) => { loc = { lat: pos.coords.latitude.toFixed(6), lng: pos.coords.longitude.toFixed(6) }; msg.style.color = ''; msg.textContent = T.locOk; },
      () => { msg.textContent = T.locErr; msg.style.color = '#f08a80'; }, { enableHighAccuracy: true, timeout: 10000 });
    return;
  }
  if (tg.closest('#fab')) return openCart();
  if (tg.closest('[data-top]')) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  if (tg.closest('[data-top-menu]')) { e.preventDefault(); window.scrollTo({ top: $('#menu').offsetTop - stick(), behavior: 'smooth' }); return; }
  if (tg.closest('#topCta')) { e.preventDefault(); window.scrollTo({ top: $('#menu').offsetTop - stick(), behavior: 'smooth' }); return; }
  if (tg.closest('#heroOrder')) { e.preventDefault(); const el = $('#menu'); window.scrollTo({ top: el.offsetTop - stick(), behavior: 'smooth' }); return; }
  if (tg.closest('#langBtn')) { lang = lang === 'ar' ? 'en' : 'ar'; store.set('lang', lang); $('#mapFrame').removeAttribute('src'); renderStatic(); renderMenu(); renderFab(); if (!$('#sheet').hidden) closeSheet(); return; }
  if (tg.closest('#themeBtn')) { theme = theme === 'dark' ? 'light' : 'dark'; renderStatic(); return; }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !$('#sheet').hidden) closeSheet();
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('card')) { e.preventDefault(); openItem(e.target.dataset.id); }
});
$('#q').addEventListener('input', (e) => { q = e.target.value.trim(); renderMenu(); });
let tk = false; window.addEventListener('scroll', () => { if (tk) return; tk = true; requestAnimationFrame(() => { spy(); const h = document.documentElement; $('#prog').style.setProperty('--p', Math.min(1, window.scrollY / Math.max(1, h.scrollHeight - h.clientHeight)).toFixed(4)); $('#top').classList.toggle('sc', window.scrollY > 20); tk = false; }); }, { passive: true });
setInterval(() => { const on = openState(); const st = $('#status'); if (st && st.classList.contains('off') === on) renderStatic(); }, 60000);

/* ---------- تشغيل ---------- */
renderStatic(); renderMenu(); renderFab();
document.querySelectorAll('.rv').forEach((el) => { if (!el.classList.contains('in') && !io) el.classList.add('in'); });
observe();
})();
