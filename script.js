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

  let strongPassword = /^(?=.*[A-Za-z])(?=.*[\W_]).{5,}$/;

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

  if (!email || !password) {
    error.innerText = "اكتب الإيميل وكلمة المرور";
    return;
  }

  if (!email.includes("@") || !email.includes(".com")) {
    error.innerText = "الإيميل غير صحيح";
    return;
  }

  if (email !== savedEmail || password !== savedPassword) {
    error.innerText = "بيانات غير صحيحة";
    return;
  }

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

  let services = [
    "طلب إصدار",
    "تجديد معاملة",
    "بدل ضائع",
    "استعلام",
    "حجز موعد"
  ];

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
function loadDetails() {
  let title = document.getElementById("serviceTitle");
  let stepsContainer = document.getElementById("stepsContainer");
  let time = document.getElementById("time");
  let fees = document.getElementById("fees");

  if (!stepsContainer) return;

  let service = localStorage.getItem("serviceName");
  title.innerText = service;

  let steps = [
    "مراجعة الدائرة المختصة",
    "تقديم المستمسكات",
    "ملء الاستمارة",
    "دفع الرسوم",
    "استلام المعاملة"
  ];

  time.innerText = "2 - 5 أيام";
  fees.innerText = "5000 دينار";

  stepsContainer.innerHTML = "";

  steps.forEach((step, index) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = "<b>الخطوة " + (index + 1) + ":</b> " + step;
    stepsContainer.appendChild(div);
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
  loadServices();
  loadDetails();
};