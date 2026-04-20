/* ===== Splash ===== */
if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
setTimeout(() => {
window.location.href = "login.html";
}, 3000);
}

/* ===== تنقل ===== */
function goRegister() {
window.location.href = "register.html";
}

function goLogin() {
window.location.href = "login.html";
}

function goBack() {
window.location.href = "home.html";
}

function goBackServices() {
window.location.href = "services.html";
}

/* ===== اظهار كلمة المرور ===== */
function togglePassword(id) {
let input = document.getElementById(id);
input.type = (input.type === "password") ? "text" : "password";
}

/* ===== تسجيل ===== */
function register() {
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirm").value;
let error = document.getElementById("error");

error.innerText = "";

if (!email || !password || !confirm) {
error.innerText = "املأ كل الحقول";
return;
}

if (!email.includes("@") || !email.includes(".com")) {
error.innerText = "الإيميل غير صحيح";
return;
}

let strongPassword = /^(?=.[A-Za-z])(?=.[\W_]).{5,}$/;

if (!strongPassword.test(password)) {
error.innerText = "كلمة المرور ضعيفة";
return;
}

if (password !== confirm) {
error.innerText = "كلمة المرور غير متطابقة";
return;
}

localStorage.setItem("userEmail", email);
localStorage.setItem("userPassword", password);

window.location.href = "login.html";
}

/* ===== تسجيل دخول ===== */

function login() {
let email = document.getElementById("loginEmail").value.trim();
let password = document.getElementById("loginPassword").value;
let error = document.getElementById("loginError");

error.innerText = "";

let savedEmail = localStorage.getItem("userEmail");
let savedPassword = localStorage.getItem("userPassword");

if (!savedEmail || !savedPassword) {
error.innerText = "لا يوجد حساب، قم بإنشاء حساب أولاً";
return;
}

if (email !== savedEmail || password !== savedPassword) {
error.innerText = "بيانات غير صحيحة";
return;
}

localStorage.setItem("isLoggedIn", "true");

window.location.href = "home.html";
}

/* ===== فتح الخدمات ===== */
function openServices(type, name) {
localStorage.setItem("serviceType", type);
localStorage.setItem("dirName", name);

window.location.href = "services.html";

}
/* ===== فتح تفاصيل الخدمة ===== */
function openDetails(service) {
localStorage.setItem("serviceName", service);

window.location.href = "details.html";

}
/* ===== تحميل الخدمات ===== */
/* ===== Splash ===== */
if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
setTimeout(() => {
window.location.href = "login.html";
}, 3000);
}

/* ===== تنقل ===== */
function goRegister() {
window.location.href = "register.html";
}

function goLogin() {
window.location.href = "login.html";
}

function goBack() {
window.location.href = "home.html";
}

function goBackServices() {
window.location.href = "services.html";
}

/* ===== اظهار كلمة المرور ===== */
function togglePassword(id) {
let input = document.getElementById(id);
input.type = (input.type === "password") ? "text" : "password";
}

/* ===== تسجيل ===== */
function register() {
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirm").value;
let error = document.getElementById("error");

error.innerText = "";

if (!email || !password || !confirm) {
error.innerText = "املأ كل الحقول";
return;
}

if (!email.includes("@") || !email.includes(".com")) {
error.innerText = "الإيميل غير صحيح";
return;
}

let strongPassword = /^(?=.[A-Za-z])(?=.[\W_]).{5,}$/;

if (!strongPassword.test(password)) {
error.innerText = "كلمة المرور ضعيفة";
return;
}

if (password !== confirm) {
error.innerText = "كلمة المرور غير متطابقة";
return;
}

localStorage.setItem("userEmail", email);
localStorage.setItem("userPassword", password);

window.location.href = "login.html";
}

/* ===== تسجيل دخول ===== */

function login() {
let email = document.getElementById("loginEmail").value.trim();
let password = document.getElementById("loginPassword").value;
let error = document.getElementById("loginError");

error.innerText = "";

let savedEmail = localStorage.getItem("userEmail");
let savedPassword = localStorage.getItem("userPassword");

if (!savedEmail || !savedPassword) {
error.innerText = "لا يوجد حساب، قم بإنشاء حساب أولاً";
return;
}

if (email !== savedEmail || password !== savedPassword) {
error.innerText = "بيانات غير صحيحة";
return;
}

localStorage.setItem("isLoggedIn", "true");

window.location.href = "home.html";
}

/* ===== فتح الخدمات ===== */
function openServices(type, name) {
localStorage.setItem("serviceType", type);
localStorage.setItem("dirName", name);

window.location.href = "services.html";

}
/* ===== فتح تفاصيل الخدمة ===== */
function openDetails(service) {
localStorage.setItem("serviceName", service);

window.location.href = "details.html";

}
/* ===== تحميل الخدمات ===== */

function loadServices() {
let list = document.getElementById("servicesList");
let title = document.getElementById("title");

let dir = localStorage.getItem("dirName");  

if (dir && title) {  
    title.innerText = "خدمات " + dir;  
}  

if (!list) return;  

let type = localStorage.getItem("serviceType");

let services = [];

if (dir === "مديرية مرور ديالى") {
services = [
"إصدار إجازة سوق لأول مرة",
"تجديد إجازة السوق",
"تجديد سنوية السيارة",
"تحويل ملكية",
"تغيير فئة إجازة سوق من خصوصي الى عمومي",
"تسجيل مركبة لأول مرة",
"إصدار بدل فاقد أو تالف للسنوية",
"بدل فاقد أو تالف لإجازة السوق"
];
} 
 else if (dir === "دائرة الجوازات ديالى") {
    services = [
        "إصدار جواز سفر لأول مرة",
        "تجديد الجواز",
        "إصدار بدل فاقد",
        "إصدار بدل تالف",
        "تصحيح بيانات الجواز",
        "خدمة الجواز السريع",
        "تغيير صورة الجواز",
        "نقل قيد الجواز بين المحافظات",
        "إقامة الأجانب",
        "تجديد إقامة أجنبي",
        "غرامات الإقامة",
        "تمديد إقامة الزائر"
    ];
  }
else if (dir === "دائرة الاحوال المدنية بعقوبة") {
    services = [
        "إصدار البطاقة الموحدة لأول مرة",
        "تجديد البطاقة الوطنية الموحدة",
        "بدل فاقد للبطاقة الوطنية",
        "بدل تالف للبطاقة الوطنية",
        "تصحيح بيانات البطاقة الوطنية",
        "تغيير محل السكن داخل البطاقة",
        "نقل النفوس من دائرة إلى أخرى",
        "إضافة لقب أو تعديل الاسم",
        "حذف اسم أو تعديل قيود مدنية",
        "إصدار بطاقة للمواليد الجدد",
        "تسجيل واقعة الولادة",
        "تسجيل واقعة الوفاة",
        "تسجيل الزواج",
        "تسجيل الطلاق",
        "إصدار قيد عائلي",
        "إصدار تأييد سكن"
    ];
}
else {
services = [
"طلب اصدار",
"تجديد معاملة",
"بدل ضائع",
"استعلام"
];
}

list.innerHTML = "";

services.forEach((service, index) => {
let div = document.createElement("div");
div.className = "card";
div.innerText = service;

let colors = ["#2a5298", "#00a86b", "#ff9800", "#e91e63", "#9c27b0"];  
div.style.borderRight = "5px solid " + colors[index % colors.length];  

div.onclick = function () {  
  openDetails(service);  
};  

list.appendChild(div);

});
}

/* ===== تحميل تفاصيل الخدمة ===== */

/* ===== تحميل تفاصيل الخدمة ===== */
function loadDetails() {
    let title = document.getElementById("serviceTitle");
    let stepsContainer = document.getElementById("stepsContainer");

    if (!stepsContainer) return;

    let service = localStorage.getItem("serviceName");
    let dir = localStorage.getItem("dirName");
    
    if (title) title.innerText = service;

    let data = [];

    // شرط فحص الخدمة والمديرية
    if (dir === "مديرية مرور ديالى" && service === "إصدار إجازة سوق لأول مرة") {
        data = [
            { title: "📄 المستمسكات المطلوبة", color: "#2a5298", items: ["البطاقة الموحدة", "بطاقة السكن"] },
            { title: "⚙️ خطوات المعاملة", color: "#00a86b", items: ["الحجز الإلكتروني عبر بوابة أور", "تأييد الحجز (الاستمارات)", "مراجعة شعبة الاستمارات", "الفحص الطبي", "التوجه إلى شعبة الاختبار الإلكتروني", "الاختبار النظري (10 أسئلة - النجاح 6)", "التوجه إلى الفحص العملي (السياقة)", "التوجه إلى الحاسبة (الطابور)", "دفع الرسوم", "التوجه إلى حاسبة البصمة", "التدقيق", "الفحص الفني", "التوجه إلى شعبة البصمات", "استلام الإجازة"] },
            { title: "💰 الرسوم", color: "#ff9800", items: ["95 ألف دينار"] },
            { title: "📌 ملاحظات", color: "#e91e63", items: ["الدفع عن طريق الماستر كارد", "في حال الرسوب بالاختبار العملي يتم دفع رسوم إعادة", "المحاولة الثانية والثالثة مجانية"] }
        ];
    } 
    else if (dir === "مديرية مرور ديالى" && service === "تحويل ملكية") {

  data = [
    {
      title: "📄 المستمسكات المطلوبة",
      color: "#2a5298",
      items: [
        "جنسية البائع + بطاقة السكن",
        "جنسية المشتري + بطاقة السكن",
        "السنوية + إجازة السوق"
      ]
    },
    {
      title: "⚙️ خطوات المعاملة",
      color: "#00a86b",
      items: [
        "1- العقد المروري",
        "2- الحجز الإلكتروني عبر بوابة أور",
        "3- تدقيق العقد المروري",
        "4- التوجه إلى شعبة الاستعلامات لغرض الحصول على استمارة تحويل مركبة",
        "5- التوجه إلى حاسبة الغرامات + الوقفات",
        "6- التوجه إلى قسم الفحص الفني (الهزة)",
        "7- التوجه إلى حاسبة الطابور",
        "8- حضور كل من البائع والمشتري لغرض البصمة",
        "9- التوجه إلى حاسبة التدقيق",
        "10- التوجه إلى حاسبة البيمنت (الدفع الإلكتروني)",
        "11- التوجه إلى حاسبة البصمات",
        "12- إكمال المعاملة واستلام السنوية الجديدة"
      ]
    },
    {
      title: "💰 الرسوم",
      color: "#ff9800",
      items: [
        "75 ألف دينار (في حال عدم انتهاء السنوية)",
        "95 ألف دينار (في حال انتهاء السنوية القانونية)"
      ]
    },
    {
      title: "📌 ملاحظات",
      color: "#e91e63",
      items: [
        "الدفع يكون عن طريق الماستر كارد فقط"
      ]
    }
  ];

}



else if (dir === "مديرية مرور ديالى" && service === "تغيير فئة إجازة سوق من خصوصي الى عمومي") {
    data = [

        {
            title: "📄 المستمسكات المطلوبة",
            color: "#2a5298",
            items: [
                "البطاقة الموحدة",
                "بطاقة السكن",
                "إجازة السوق"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "الحجز الإلكتروني عبر بوابة أور",
                "تأكيد الحجز الإلكتروني من قبل شعبة الباركود في مديرية المرور العامة",
                "التوجه إلى شعبة صرف الاستمارات",
                "الفحص الطبي (فحص النظر)",
                "فحص المخدرات والمؤثرات العقلية",
                "التوجه إلى حاسبة الاختبار الإلكتروني",
                "التوجه إلى ساحة الاختبار العملي",
                "سحب محضر تغيير فئة",
                "التوجه إلى اللجنة المختصة لتوقيع المحضر"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "193 ألف دينار"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "في حالة الرسوب يتم دفع 7 آلاف للمحاولة الثانية",
                "المحاولات التالية مجانية"
            ]
        }

    ];
}
    else {
        // باقي الخدمات الافتراضية
        data = [
            { title: "📄 المستمسكات المطلوبة", color: "#2a5298", items: ["مستمسك 1", "مستمسك 2"] },
            { title: "⚙️ خطوات المعاملة", color: "#00a86b", items: ["خطوة 1", "خطوة 2"] },
            { title: "💰 الرسوم", color: "#ff9800", items: ["حسب الخدمة"] },
            { title: "📌 ملاحظات", color: "#e91e63", items: ["لا توجد ملاحظات حالياً"] }
        ];
    }

    // تنظيف الحاوية قبل الرسم
    stepsContainer.innerHTML = "";

    // رسم البيانات (حلقة واحدة فقط)
    data.forEach((section) => {
        let card = document.createElement("div");
        card.className = "section-card";

        let header = document.createElement("div");
        header.className = "section-title";
        header.innerText = section.title;
        header.style.color = section.color;
        card.appendChild(header);

        section.items.forEach((item) => {
            let box = document.createElement("div");
            box.className = "item-box";
            box.innerText = item;
            box.style.borderRight = "5px solid " + section.color;
            card.appendChild(box);
        });

        stepsContainer.appendChild(card);
    });
}
/* ===== البحث ===== */
function searchFunction() {
let input = document.getElementById("searchInput").value.toLowerCase();
let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
let text = cards[i].innerText.toLowerCase();
cards[i].style.display = text.includes(input) ? "block" : "none";
}
}

function filterServices() {
let input = document.getElementById("serviceSearch").value.toLowerCase();
let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
let text = cards[i].innerText.toLowerCase();
cards[i].style.display = text.includes(input) ? "block" : "none";
}
}

/* ===== تشغيل ===== */
window.onload = function () {

// إذا مسجل سابقاً لا يطلب تسجيل دخول  
if (localStorage.getItem("isLoggedIn") === "true" &&  
    window.location.pathname.includes("login.html")) {  
    window.location.href = "home.html";  
}  

// 🔥 هذا اللي أضفناه  
 let dir = localStorage.getItem("dirName"); 
let title = document.getElementById("title");  

if (dir && title) {  
    title.innerText = "خدمات " + dir;  
}  
if (window.location.pathname.includes("services.html")) {
    loadServices();
}

if (window.location.pathname.includes("details.html")) {
    loadDetails();
}
};

