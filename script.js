window.onload = function () {

    // شاشة البداية (index)
    if (document.querySelector(".loader")) {
        setTimeout(() => {
            if (localStorage.getItem("isLoggedIn") === "true") {
                window.location.href = "home.html";
            } else {
                window.location.href = "login.html";
            }
        }, 2000);
    }

    // صفحة الخدمات
    if (document.getElementById("servicesList")) {
        loadServices();
    }

    // صفحة التفاصيل
    if (document.getElementById("stepsContainer")) {
        loadDetails();
    }
};

/* ===== تنقل ===== */
function goRegister() {
  window.location.href = "register.html";
}

function goLogin() {
  window.location.href = "login.html";
}

function goBack() {
  window.history.back();
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

  if (!email || !password) {
    error.innerText = "اكتب الإيميل وكلمة المرور";
    return;
  }

  if (email !== savedEmail || password !== savedPassword) {
    error.innerText = "بيانات غير صحيحة";
    return;
  }

  // حفظ تسجيل الدخول
  localStorage.setItem("isLoggedIn", "true");

  window.location.href = "home.html";
}

/* ===== فتح الخدمات ===== */
function openServices(type) {
  localStorage.setItem("serviceType", type);
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

  if (!list) return;

  let type = localStorage.getItem("serviceType");
  title.innerText = "خدمات " + type;


  list.innerHTML = "";
let services = [];

if (type === "المرور") {
    services = [
        "إصدار إجازة سوق لأول مرة",
        "تجديد إجازة السوق",
        "تجديد سنوية السيارة",
        "تحويل ملكية",
        "تغيير فئة إجازة سوق من خصوصي إلى عمومي",
        "تسجيل مركبة لأول مرة",
        "إصدار بدل ضائع أو تالف للسنوية",
        "إصدار بدل ضائع أو تالف لإجازة السوق"
    ];
} 
else {
    services = [
        "طلب إصدار",
        "تجديد معاملة",
        "بدل ضائع",
        "استعلام",
        "حجز موعد"
    ];
}
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
function loadDetails() {
  let title = document.getElementById("serviceTitle");
  let stepsContainer = document.getElementById("stepsContainer");
  
  let fees = document.getElementById("fees");

  if (!stepsContainer) return;

  let service = localStorage.getItem("serviceName");
  title.innerText = service;





if (service === "إصدار إجازة سوق لأول مرة") {
    

    stepsContainer.innerHTML = `
    
    
        <li>البطاقة الموحدة</li>
        <li>بطاقة السكن</li>
    </ul>

    <h3>خطوات المعاملة:</h3>
    <ol>
        <li>الحجز الإلكتروني عبر بوابة أور + الفحص النظري والمؤشرات العقلية</li>
        <li>تأييد الحجز الإلكتروني (الاستمارات)</li>
        <li>التوجه إلى شعبة صرف الاستمارات</li>
        <li>التوجه إلى شعبة الاختبار الإلكتروني</li>
        <li>التوجه إلى شعبة الإسعافات الأولية</li>
        <li>أداء الاختبار الإلكتروني (10 أسئلة - النجاح من 60)</li>
        <li>التوجه إلى فحص السياقة (العملي)</li>
        <li>التوجه إلى حاسبة الطابور</li>
        <li>دفع الرسوم</li>
        <li>التوجه إلى حاسبة البصمة</li>
        <li>التدقيق</li>
        <li>الفحص الطبي</li>
        <li>التوجه إلى شعبة البصمات</li>
        <li>استلام الإجازة</li>
    </ol>

    <p style="color:green; font-weight:bold;">
        🎉 مبروك! تم إكمال الإجراءات بنجاح
    </p>

    <h3>الملاحظات:</h3>
    <ul>
        <li>الدفع عن طريق الماستر كارد</li>
        <li>رسوم الاختبار العملي: 7000 دينار</li>
        <li>المحاولة الثانية والثالثة الخ مجانية</li>
    </ul>

    <h3>الرسوم:</h3>
    <p>95,000 دينار</p>
    `;
}
    else if (service === "تحويل ملكية") {

    stepsContainer.innerHTML = `
    <h3>المستمسكات المطلوبة:</h3>
    <ul>
      <li>جنسية البائع + بطاقة السكن</li>
      <li>جنسية المشتري + بطاقة السكن</li>
      <li>السنوية + إجازة السوق</li>
    </ul>

    <h3>خطوات المعاملة:</h3>
    <ol>
      <li>العقد المروري</li>
      <li>الحجز الإلكتروني عبر بوابة أور</li>
      <li>تدقيق العقد المروري</li>
      <li>التوجه إلى شعبة رفع الاستمارات لغرض الحصول على استمارة تحويل مركبة</li>
      <li>التوجه إلى حاسبة الغرامات والتأمينات</li>
      <li>التوجه إلى قسم فحص المتانة (الهزة)</li>
      <li>التوجه إلى حاسبة الطابور</li>
      <li>حضور البائع والمشتري لغرض البصمة</li>
      <li>التوجه إلى حاسبة التدقيق</li>
      <li>التوجه إلى حاسبة البصمة</li>
    </ol>

    <p style="color:green; font-weight:bold;">
    🎉 مبروك... تم إكمال معاملتك
    </p>

    <h3>الرسوم:</h3>
    <p>70,000 ألف دينار</p>

    <h3>ملاحظات:</h3>
    <ul>
      <li>الرسوم 65 ألف في حالة عدم انتهاء السنوية</li>
      <li>90 ألف في حالة انتهاء السنوية القانونية</li>
      <li>الدفع يكون عن طريق الماستر كارد فقط</li>
    </ul>
    `;
}
  time.innerText = "2 - 5 أيام";
  fees.innerText = "5000 دينار";

  stepsContainer.innerHTML = "";

  
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
