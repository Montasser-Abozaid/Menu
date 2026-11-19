/* قائمة الطعام — عدّل الأسماء والأسعار والصور من هنا (الأسعار تجريبية بالجنيه المصري) */
window.CATS=[
 {
  "id": "pizza",
  "ar": "بيتزا",
  "en": "Pizza"
 },
 {
  "id": "burgers",
  "ar": "برجر",
  "en": "Burgers"
 },
 {
  "id": "sandwiches",
  "ar": "ساندويتش",
  "en": "Sandwiches"
 },
 {
  "id": "meals",
  "ar": "وجبات",
  "en": "Meals"
 },
 {
  "id": "sides",
  "ar": "جانبية",
  "en": "Sides"
 },
 {
  "id": "drinks",
  "ar": "مشروبات",
  "en": "Drinks"
 },
 {
  "id": "hot",
  "ar": "مشروبات ساخنة",
  "en": "Hot Drinks"
 },
 {
  "id": "desserts",
  "ar": "حلويات",
  "en": "Desserts"
 }
];
window.ADDONS=[
 {
  "id": "xcheese",
  "ar": "جبنة إضافية",
  "en": "Extra cheese",
  "add": 30
 },
 {
  "id": "olives",
  "ar": "زيتون",
  "en": "Olives",
  "add": 20
 },
 {
  "id": "mushroom",
  "ar": "مشروم",
  "en": "Mushroom",
  "add": 25
 },
 {
  "id": "bacon",
  "ar": "بيكون",
  "en": "Bacon",
  "add": 40
 },
 {
  "id": "sauce",
  "ar": "صلصة خاصة",
  "en": "Special sauce",
  "add": 15
 }
];
window.MENU=[
 {
  "id": "p1",
  "cat": "pizza",
  "ar": "بيتزا مارجريتا",
  "en": "Margherita Pizza",
  "descAr": "طماطم سان مارزانو وجبنة موزاريلا وريحان طازج.",
  "descEn": "San Marzano tomato, fior di latte, fresh basil.",
  "price": 180,
  "img": "assets/img/menu/p1.jpg",
  "sizes": [
   {
    "id": "s",
    "ar": "صغير",
    "en": "Small",
    "add": 0
   },
   {
    "id": "m",
    "ar": "وسط",
    "en": "Medium",
    "add": 60
   },
   {
    "id": "l",
    "ar": "كبير",
    "en": "Large",
    "add": 120
   }
  ],
  "addons": [
   "xcheese",
   "olives",
   "mushroom"
  ]
 },
 {
  "id": "p2",
  "cat": "pizza",
  "ar": "بيتزا بيبروني",
  "en": "Pepperoni Pizza",
  "descAr": "بيبروني حار وموزاريلا وصلصة الطماطم الخاصة.",
  "descEn": "Spicy pepperoni, mozzarella and house tomato sauce.",
  "price": 200,
  "img": "assets/img/menu/p2.jpg",
  "sizes": [
   {
    "id": "s",
    "ar": "صغير",
    "en": "Small",
    "add": 0
   },
   {
    "id": "m",
    "ar": "وسط",
    "en": "Medium",
    "add": 60
   },
   {
    "id": "l",
    "ar": "كبير",
    "en": "Large",
    "add": 120
   }
  ],
  "addons": [
   "xcheese",
   "olives",
   "mushroom"
  ]
 },
 {
  "id": "p3",
  "cat": "pizza",
  "ar": "بيتزا دجاج باربكيو",
  "en": "Chicken BBQ Pizza",
  "descAr": "دجاج مشوي وصلصة باربكيو مدخنة وبصل أحمر.",
  "descEn": "Grilled chicken, smoky BBQ glaze, red onion.",
  "price": 220,
  "img": "assets/img/menu/p3.jpg",
  "sizes": [
   {
    "id": "s",
    "ar": "صغير",
    "en": "Small",
    "add": 0
   },
   {
    "id": "m",
    "ar": "وسط",
    "en": "Medium",
    "add": 60
   },
   {
    "id": "l",
    "ar": "كبير",
    "en": "Large",
    "add": 120
   }
  ],
  "addons": [
   "xcheese",
   "olives",
   "mushroom"
  ]
 },
 {
  "id": "p4",
  "cat": "pizza",
  "ar": "بيتزا أربع أجبان",
  "en": "Four Cheese Pizza",
  "descAr": "موزاريلا وجورجونزولا وبارميزان وبروفولوني.",
  "descEn": "Mozzarella, gorgonzola, parmesan and provolone.",
  "price": 220,
  "img": "assets/img/menu/p4.jpg",
  "sizes": [
   {
    "id": "s",
    "ar": "صغير",
    "en": "Small",
    "add": 0
   },
   {
    "id": "m",
    "ar": "وسط",
    "en": "Medium",
    "add": 60
   },
   {
    "id": "l",
    "ar": "كبير",
    "en": "Large",
    "add": 120
   }
  ],
  "addons": [
   "xcheese",
   "olives",
   "mushroom"
  ]
 },
 {
  "id": "p5",
  "cat": "burgers",
  "ar": "برجر لحم كلاسيك",
  "en": "Classic Beef Burger",
  "descAr": "لحم أنجوس 180 جم مع الشيدر والمخلل في خبز بريوش.",
  "descEn": "180g Angus beef, cheddar, pickles, brioche bun.",
  "price": 220,
  "img": "assets/img/menu/p5.jpg",
  "addons": [
   "xcheese",
   "bacon",
   "sauce"
  ]
 },
 {
  "id": "p6",
  "cat": "burgers",
  "ar": "برجر سماش دبل",
  "en": "Double Smash Burger",
  "descAr": "قرصان من اللحم المشوي مع جبنة مضاعفة وصلصة خاصة.",
  "descEn": "Two smashed patties, double cheese, secret sauce.",
  "price": 280,
  "img": "assets/img/menu/p6.jpg",
  "addons": [
   "xcheese",
   "bacon",
   "sauce"
  ]
 },
 {
  "id": "p7",
  "cat": "burgers",
  "ar": "برجر دجاج مقرمش",
  "en": "Crispy Chicken Burger",
  "descAr": "دجاج مقلي بالزبدة مع سلطة الكرنب ومايونيز حار.",
  "descEn": "Buttermilk fried chicken, slaw, chili mayo.",
  "price": 200,
  "img": "assets/img/menu/p7.jpg",
  "addons": [
   "xcheese",
   "bacon",
   "sauce"
  ]
 },
 {
  "id": "p8",
  "cat": "sandwiches",
  "ar": "ساندويتش دجاج مقرمش",
  "en": "Crispy Chicken Sandwich",
  "descAr": "دجاج مقرمش مع صلصة الثوم والخيار المخلل.",
  "descEn": "Crunchy chicken, garlic aioli and pickled cucumber.",
  "price": 180,
  "img": "assets/img/menu/p8.jpg"
 },
 {
  "id": "p9",
  "cat": "sandwiches",
  "ar": "كلوب ساندويتش",
  "en": "Club Sandwich",
  "descAr": "ساندويتش ثلاثي الطبقات بالديك الرومي والبيض والخس.",
  "descEn": "Triple-decker turkey, egg, lettuce and tomato.",
  "price": 200,
  "img": "assets/img/menu/p9.jpg"
 },
 {
  "id": "p10",
  "cat": "sandwiches",
  "ar": "لفافة فلافل",
  "en": "Falafel Wrap",
  "descAr": "فلافل مقرمشة مع الطحينة والمخلل والأعشاب الطازجة.",
  "descEn": "Crisp falafel, tahini, pickles and fresh herbs.",
  "price": 140,
  "img": "assets/img/menu/p10.jpg"
 },
 {
  "id": "p11",
  "cat": "meals",
  "ar": "طبق دجاج مشوي",
  "en": "Grilled Chicken Plate",
  "descAr": "دجاج متبل بالأعشاب مع أرز وخضار مشوية.",
  "descEn": "Herb-marinated chicken, rice pilaf, grilled vegetables.",
  "price": 320,
  "img": "assets/img/menu/p11.jpg"
 },
 {
  "id": "p12",
  "cat": "meals",
  "ar": "ستيك فيليه لحم",
  "en": "Beef Tenderloin Steak",
  "descAr": "فيليه لحم 220 جم مع صلصة الفلفل وبطاطس بالكمأة.",
  "descEn": "220g tenderloin, peppercorn sauce, truffle mash.",
  "price": 520,
  "img": "assets/img/menu/p12.jpg"
 },
 {
  "id": "p13",
  "cat": "meals",
  "ar": "باستا ألفريدو",
  "en": "Pasta Alfredo",
  "descAr": "فيتوتشيني بكريمة البارميزان مع دجاج مشوي.",
  "descEn": "Fettuccine in parmesan cream with grilled chicken.",
  "price": 280,
  "img": "assets/img/menu/p13.jpg"
 },
 {
  "id": "p14",
  "cat": "sides",
  "ar": "بطاطس مقلية",
  "en": "French Fries",
  "descAr": "بطاطس مقطعة يدويًا ومقلية مرتين مع ملح البحر.",
  "descEn": "Hand-cut, twice-fried, sea salt.",
  "price": 80,
  "img": "assets/img/menu/p14.jpg",
  "sizes": [
   {
    "id": "reg",
    "ar": "عادي",
    "en": "Regular",
    "add": 0
   },
   {
    "id": "lg",
    "ar": "كبير",
    "en": "Large",
    "add": 40
   }
  ]
 },
 {
  "id": "p15",
  "cat": "sides",
  "ar": "أصابع موزاريلا",
  "en": "Mozzarella Sticks",
  "descAr": "موزاريلا مقرمشة مع صلصة المارينارا.",
  "descEn": "Golden crumbed mozzarella with marinara dip.",
  "price": 120,
  "img": "assets/img/menu/p15.jpg"
 },
 {
  "id": "p16",
  "cat": "sides",
  "ar": "حلقات البصل",
  "en": "Onion Rings",
  "descAr": "حلقات بصل مقرمشة مع البابريكا المدخنة.",
  "descEn": "Beer-battered rings with smoked paprika.",
  "price": 100,
  "img": "assets/img/menu/p16.jpg"
 },
 {
  "id": "p17",
  "cat": "drinks",
  "ar": "عصير برتقال طازج",
  "en": "Fresh Orange Juice",
  "descAr": "عصير برتقال طازج يُحضّر عند الطلب.",
  "descEn": "Cold-pressed to order.",
  "price": 100,
  "img": "assets/img/menu/p17.jpg"
 },
 {
  "id": "p18",
  "cat": "drinks",
  "ar": "كولا",
  "en": "Cola",
  "descAr": "علبة 330 مل باردة.",
  "descEn": "Chilled 330ml can.",
  "price": 50,
  "img": "assets/img/menu/p18.jpg"
 },
 {
  "id": "p19",
  "cat": "drinks",
  "ar": "قهوة مثلجة",
  "en": "Iced Coffee",
  "descAr": "إسبريسو مزدوج مع الحليب والثلج.",
  "descEn": "Double espresso, milk and ice.",
  "price": 90,
  "img": "assets/img/menu/p19.jpg"
 },
 {
  "id": "p20",
  "cat": "drinks",
  "ar": "ليمون بالنعناع",
  "en": "Lemon Mint",
  "descAr": "ليمون طازج ونعناع وثلج مجروش.",
  "descEn": "Fresh lemon, mint and crushed ice.",
  "price": 90,
  "img": "assets/img/menu/p20.jpg"
 },
 {
  "id": "p21",
  "cat": "hot",
  "ar": "إسبريسو",
  "en": "Espresso",
  "descAr": "قهوة من مصدر واحد بجرعة مزدوجة.",
  "descEn": "Single origin, double shot.",
  "price": 60,
  "img": "assets/img/menu/p21.jpg"
 },
 {
  "id": "p22",
  "cat": "hot",
  "ar": "كابتشينو",
  "en": "Cappuccino",
  "descAr": "رغوة حليب ناعمة فوق إسبريسو غني.",
  "descEn": "Velvety microfoam over a rich espresso.",
  "price": 80,
  "img": "assets/img/menu/p22.jpg"
 },
 {
  "id": "p23",
  "cat": "hot",
  "ar": "شاي مغربي بالنعناع",
  "en": "Moroccan Mint Tea",
  "descAr": "شاي أخضر مع نعناع طازج.",
  "descEn": "Green tea with fresh mint.",
  "price": 60,
  "img": "assets/img/menu/p23.jpg"
 },
 {
  "id": "p24",
  "cat": "desserts",
  "ar": "تيراميسو",
  "en": "Tiramisu",
  "descAr": "ماسكاربوني وبسكويت مغمس بالإسبريسو وكاكاو.",
  "descEn": "Mascarpone, espresso-soaked savoiardi, cocoa.",
  "price": 140,
  "img": "assets/img/menu/p24.jpg"
 },
 {
  "id": "p25",
  "cat": "desserts",
  "ar": "كيكة الشوكولاتة الذائبة",
  "en": "Chocolate Lava Cake",
  "descAr": "قلب شوكولاتة دافئ مع كريمة الفانيليا.",
  "descEn": "Warm molten centre, vanilla cream.",
  "price": 150,
  "img": "assets/img/menu/p25.jpg"
 }
];

/* ===== إكمال كل فئة إلى 4 أصناف (الصور مؤقتة: تُنسخ من صنف مشابه في الفئة نفسها، استبدلها بصور الأصناف الحقيقية) ===== */
(function(){
 var M=window.MENU,g=function(id){for(var i=0;i<M.length;i++){if(M[i].id===id)return M[i].img}return ''};
 M.push(
 {id:'p26',cat:'burgers',ar:'برجر بيكون بالجبنة',en:'Bacon Cheese Burger',descAr:'لحم أنجوس مشوي مع شرائح البيكون المقرمش وجبنة الشيدر الذائبة.',descEn:'Grilled Angus beef, crispy bacon and melted cheddar.',price:260,img:g('p5'),addons:['xcheese','bacon','sauce']},
 {id:'p27',cat:'sandwiches',ar:'ساندويتش دجاج بالجبن',en:'Chicken Cheese Sandwich',descAr:'شرائح دجاج مشوية مع جبنة ذائبة وخس وصلصة الثوم.',descEn:'Grilled chicken strips, melted cheese, lettuce and garlic sauce.',price:170,img:g('p8')},
 {id:'p28',cat:'meals',ar:'دجاج بالكريمة والمشروم',en:'Creamy Mushroom Chicken',descAr:'صدر دجاج بصلصة الكريمة والمشروم مع أرز بالزبدة.',descEn:'Chicken breast in creamy mushroom sauce with buttered rice.',price:340,img:g('p11')},
 {id:'p29',cat:'sides',ar:'بطاطس بالجبنة',en:'Cheese Fries',descAr:'بطاطس مقرمشة مغطاة بصلصة الشيدر الدافئة.',descEn:'Crispy fries topped with warm cheddar sauce.',price:110,img:g('p14')},
 {id:'p30',cat:'hot',ar:'لاتيه',en:'Latte',descAr:'إسبريسو مع حليب مبخّر وطبقة رقيقة من الرغوة.',descEn:'Espresso with steamed milk and a thin layer of foam.',price:80,img:g('p22')},
 {id:'p31',cat:'desserts',ar:'براوني بالشوكولاتة',en:'Chocolate Brownie',descAr:'براوني دافئ بقطع الشوكولاتة مع كرة آيس كريم فانيليا.',descEn:'Warm chocolate brownie with a scoop of vanilla ice cream.',price:120,img:g('p25')},
 {id:'p32',cat:'desserts',ar:'تشيز كيك لوتس',en:'Lotus Cheesecake',descAr:'تشيز كيك كريمي فوق قاعدة البسكويت مع صلصة اللوتس.',descEn:'Creamy cheesecake on a biscuit base with Lotus sauce.',price:140,img:g('p24')}
 );
})();
