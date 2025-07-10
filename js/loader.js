// loader.js
function includeHTML(elId, url) {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Network error " + res.status);
      return res.text();
    })
    .then((html) => {
      document.getElementById(elId).innerHTML = html;
    })
    .catch((err) => console.error("Include error:", err));
}

window.addEventListener("DOMContentLoaded", () => {
  includeHTML("header-placeholder", "header.html");
  includeHTML("footer-placeholder", "footer.html");
});
