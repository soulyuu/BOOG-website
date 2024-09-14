function handleDocumentClick(event) {
    var dropdown = document.getElementById("languageDropdown");
    var target = event.target;

    if (!dropdown.contains(target)) {
        dropdown.classList.add("hidden");
    }
}

function toggleDropdown(event) {
    event.stopPropagation(); 
    var dropdown = document.getElementById("languageDropdown");
    dropdown.classList.toggle("hidden");
}

document.addEventListener("click", handleDocumentClick);

function toggleTheme() {
    document.getElementById('header').classList.toggle('light-theme-header-footer');
    document.getElementById('footer').classList.toggle('light-theme-header-footer');
}

function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("hidden");
}