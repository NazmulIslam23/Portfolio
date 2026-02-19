const links = document.querySelectorAll("#nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const page = link.getAttribute("data-page");

  if (
    page === currentPage ||
    (page === "index.html" && currentPage === "")
  ) {
    link.classList.add("active");
  }

  link.addEventListener("click", () => {
    window.location.href = page;
  });
});
