const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Buka menu");
    });
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
