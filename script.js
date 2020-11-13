// Functioning of Nav Bar
// function menuToggle() {
//   let nav = document.getElementById("nav");
//   if (nav.classList.contains("nav")) {
//     nav.classList.toggle("nav-tog");
//   }
// }
// Dark Mode Toggle
// let section1 = document.getElementById("section-1");
// let body = document.getElementById("body");
// let textColor = document.getElementById("text-h1");
// let DarkMode = document.getElementById("DarkMode");
// function changeTheme() {
//   if ((DarkMode.src = "SVGs/sun-black.svg")) {
//     section1.style.backgroundColor = "#242424";
//     body.style.backgroundColor = "#242424";
//     textColor.style.color = "#fff";
//     DarkMode.src = "SVGs/sun-white.svg";
//   } else {
//     section1.style.backgroundColor = "#fff";
//   }}
// section1.style.backgroundColor = "#fff";
// body.style.backgroundColor = "#fff";
// textColor.style.color = "#242424";
// DarkMode.src = "SVGs/sun-black.svg";

// if ((DarkMode.src = "SVGs/sun-white.svg")) {
//   section1.style.backgroundColor = "#fff";
//   body.style.backgroundColor = "#fff";
//   textColor.style.color = "#242424";
//   DarkMode.src = "SVGs/sun-black.svg";
// }

// if ((DarkMode.src = "SVGs/sun-white.svg")) {
//   section1.style.backgroundColor = "#fff";
//   body.style.backgroundColor = "#fff";
//   textColor.style.color = "#000";
//   DarkMode.src = "SVGs/sun.svg";
// }
// let theme = document.getElementById("theme");
// // let notification = document.getElementById('notification');
// if (theme.getAttribute("href") == "light.css") {
//   theme.href = "dark.css";
//   // notification.innerText = "Dark Mode ";
// } else {
//   theme.href = "light.css";
//   // notification.innerText = "Light Mode ";
// }
// setTimeout(() => {
//   notification.innerText ='';
// }, 1600);
function changeTheme() {
  let DarkMode = document.getElementById("DarkMode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == "light.css") {
    theme.href = "dark.css";
    DarkMode.src = "SVGs/sun-white.svg";
  } else {
    theme.href = "light.css";
    DarkMode.src = "SVGs/sun-black.svg";
  }
}
