/* ============================================================
   إعدادات المطعم — هذا هو الملف الوحيد الذي تحتاج تعديله لكل عميل
   ============================================================ */
window.RESTAURANT = {
  nameAr: 'مطعم سماش برجر',
  nameEn: 'Smash Burger Restaurant',
  taglineAr: 'أطباق طازجة تُحضَّر عند الطلب — اطلب الآن عبر واتساب',
  taglineEn: 'Freshly prepared dishes — order now via WhatsApp',

  // الاسم المختصر الذي يظهر في الهيدر عند اللغة الإنجليزية (اختياري)
  headerNameEn: 'Smash Burger',

  // السلوغان: يظهر تحت اسم المطعم في الهيدر
  sloganAr: 'برجر طازج، وطعم لا يُنسى',
  sloganEn: 'Fresh burgers, great taste',

  // رقم واتساب الطلبات (بصيغة دولية بدون + أو أصفار)
  whatsapp: '201552503725',
  phone: '+201552503725',

  // حسابات التواصل الاجتماعي (قيم مؤقتة — بدّلها بروابط المطعم الحقيقية؛ اتركها فارغة لإخفاء الزر)
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',

  addressAr: 'شرم الشيخ - حي النور',
  addressEn: 'Sharm El-Sheikh - Al Nour District',

  // الموقع على خرائط جوجل
  lat: 27.8855245,
  lng: 34.2998701,
  mapsUrl: 'https://www.google.com/maps/place/Abo+Ali+Restaurant+%26+Cafe/@27.8855245,34.2998701,17z/data=!4m6!3m5!1s0x1453399e722bbb8b:0x7c56946578eb09e6!8m2!3d27.8855245!4d34.2998701',

  // وسائل الدفع (قيم تجريبية — بدّلها ببيانات العميل). احذف الكتلة كاملة لإخفاء أزرار الدفع
  payments: {
    vodafone: '01012345678',            // رقم فودافون كاش
    instapay: 'smashburger@instapay'    // عنوان إنستا باي
  },

  // العملة والرسوم
  currencyAr: 'ج.م',
  currencyEn: 'EGP',
  deliveryFee: 25,      // رسوم التوصيل (ضع 0 لإلغائها)
  vatPercent: 0,        // نسبة الضريبة المضافة (ضع 0 لإلغائها)

  // مواعيد العمل (تتكرر يوميًا). إن كان الإغلاق بعد منتصف الليل اكتبه كما هو، مثل 01:00
  timezone: 'Africa/Cairo',
  open: '10:00',
  close: '01:00',

  // أنواع الطلب المتاحة: dine (داخل المطعم) · takeaway (استلام) · delivery (توصيل)
  orderTypes: ['delivery', 'takeaway', 'dine'],

  defaultLang: 'ar',    // ar أو en
  defaultTheme: 'dark'  // dark أو light
};
