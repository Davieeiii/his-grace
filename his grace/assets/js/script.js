// Keep JavaScript minimal so the site stays easy to understand and edit later.
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const currentPage = document.body.dataset.page;

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (currentPage && siteNav) {
    const links = siteNav.querySelectorAll("a");

    links.forEach((link) => {
      const href = link.getAttribute("href");
      const pageName = href === "index.html" ? "home" : href?.replace(".html", "");

      if (pageName === currentPage) {
        link.classList.add("active");
      }
    });
  }
});
