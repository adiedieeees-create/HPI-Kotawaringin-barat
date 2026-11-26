const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

function setNavigationOpen(isOpen, restoreFocus = false) {
  if (!menuButton || !navigation) return;
  navigation.classList.toggle("open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  if (!isOpen && restoreFocus) menuButton.focus();
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
    setNavigationOpen(isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavigationOpen(false));
  });

  // The unused lower area of the full-screen menu acts as its backdrop.
  navigation.addEventListener("click", (event) => {
    if (event.target === navigation) setNavigationOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setNavigationOpen(false, true);
    }
  });

  // Avoid leaving the page scroll-locked when a device is rotated to desktop width.
  const desktopLayout = window.matchMedia("(min-width: 1001px)");
  desktopLayout.addEventListener("change", (event) => {
    if (event.matches) setNavigationOpen(false);
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const searchInput = document.querySelector("#destination-search");
const filterButtons = document.querySelectorAll(".filter-button");
const destinationCards = document.querySelectorAll(".directory-card");
const emptyState = document.querySelector("#empty-state");
let activeCategory = "all";

function filterDestinations() {
  const query = (searchInput?.value || "").trim().toLocaleLowerCase("id");
  let visibleCount = 0;

  destinationCards.forEach((card) => {
    const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
    const matchesQuery = !query || card.textContent.toLocaleLowerCase("id").includes(query);
    const isVisible = matchesCategory && matchesQuery;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  if (emptyState) emptyState.hidden = visibleCount !== 0;
}

if (searchInput) searchInput.addEventListener("input", filterDestinations);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter || "all";
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    filterDestinations();
  });
});
