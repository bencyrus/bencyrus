export default function Navbar() {
  const navbar = document.createElement("nav");

  // Determine current path
  const currentPath = window.location.pathname;

  // Helper function to determine active style
  function getLinkStyle(path) {
    if (path === "/" && currentPath !== "/") {
      return "text-decoration: underline; color: gray;";
    }
    return currentPath.startsWith(path)
      ? "text-decoration: underline; color: #242526; font-weight: bold;"
      : "text-decoration: underline; color: gray;";
  }

  navbar.innerHTML = `
    <ul style='list-style-type: none; display: flex; justify-content: left; gap: 20px;'>
        <li><a href="/" style='${getLinkStyle("/")}'>Home</a></li>
        <li><a href="/swe/swe.html" style='${getLinkStyle(
          "/swe"
        )}'>Software</a></li>
        <li><a href="/photography/photography.html" style='${getLinkStyle(
          "/photography"
        )}'>Photography</a></li>
    </ul>
  `;

  return navbar;
}
