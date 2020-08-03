// Functioning of Nav Bar
function menuToggle() {
  let nav = document.getElementById("nav");
  if (nav.classList.contains("nav")) {
    nav.classList.toggle("nav-tog");
  }
}
// Dark Mode Toggle
function changeTheme() {
  let theme = document.getElementById("theme");
  let notification = document.getElementById('notification');
  if (theme.getAttribute("href") == "light.css") {
    theme.href = "dark.css";
    notification.innerText = 'Dark Mode ';
  } else {
    theme.href = "light.css";
    notification.innerText = 'Light Mode ';
  }
  setTimeout(() => {
    notification.innerText ='';
  }, 1600);
}
