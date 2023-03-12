const featuresDropDown = document.querySelector(".features-dropDown");
const companyDropDown = document.querySelector(".company-dropDown");
const asideFeaturesDropdown = document.querySelector(
  ".aside-features-dropdown"
);
const asideComapanyDropdown = document.querySelector(".aside-company-dropdown");
const sideBarMenu = document.querySelector(".sidebarMenu");
const sideBarSection = document.querySelector(".sideBarSection");

// header functions start

function openMenu() {
  sideBarSection.classList.toggle("sideBar");
  sideBarMenu.classList.toggle("handleMenu");
}
// 
function featuresDropdown() {
  featuresDropDown.classList.add("active-dropdown");
}

function hideFeaturesDropdown() {
  featuresDropDown.classList.remove("active-dropdown");
  companyDropDown.classList.remove("active-dropdown");
}

function companyDropdown() {
  companyDropDown.classList.add("active-dropdown");
}
// header functions end

// sidebar functions start
function sidebarFeatures() {
  asideComapanyDropdown.classList.remove("asideActive");
  asideFeaturesDropdown.classList.toggle("asideActive");
}

function sidebarCompany() {
  asideFeaturesDropdown.classList.remove("asideActive");
  asideComapanyDropdown.classList.toggle("asideActive");
}

sideBarSection.addEventListener("click", () => {
  sideBarSection.classList.remove("sideBar");
  sideBarMenu.classList.remove("handleMenu");
});

sideBarMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// sidebar functions end
