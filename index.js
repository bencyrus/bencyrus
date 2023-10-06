import Navbar from "./components/Navbar.js";

window.onload = () => {
  const navbar = Navbar();
  const body = document.getElementsByTagName("body")[0];
  body.firstChild
    ? body.insertBefore(navbar, body.firstChild)
    : body.appendChild(navbar);
};
