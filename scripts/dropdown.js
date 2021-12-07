const dropdownToggles = Array.from(
    document.querySelectorAll(".dropdown-toggle")
);

for (let toggleElement of dropdownToggles) {
    const targetElementSelector = toggleElement.getAttribute("data-target");
    const targetElement = document.querySelector(targetElementSelector);
    targetElement.style.display = "none";

    toggleElement.addEventListener("click", () => {
        if (targetElement.style.display === "none") {
            targetElement.style.display = "block";
            toggleElement.innerHTML = "&#x25B2;";
        } else {
            targetElement.style.display = "none";
            toggleElement.innerHTML = "&#x25BC;";
        }
    });
}



