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
            toggleElement.classList.remove("fa-caret-down");
            toggleElement.classList.add("fa-caret-up");
        } else {
            targetElement.style.display = "none";
            toggleElement.classList.remove("fa-caret-up");
            toggleElement.classList.add("fa-caret-down");
        }
    });
}



