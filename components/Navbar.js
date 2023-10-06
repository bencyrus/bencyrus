export default function Navbar() {
  const navbar = document.createElement("nav");
  navbar.innerHTML = `
    <ul style='list-style-type: none;'>
        <li><a href="/" style='text-decoration: underline; color: black; font-weight: bold;'>Home</a></li>
    </ul>
    `;

  return navbar;
}
