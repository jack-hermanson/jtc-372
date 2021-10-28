const dropdownToggles = Array.from(
    document.querySelectorAll(".dropdown-toggle")
);

const showElement = (targetElement, toggleElement) => {
    targetElement.style.display = "block";
    toggleElement.addEventListener("click", () => hideElement(targetElement, toggleElement));
    toggleElement.classList.remove("fa-caret-down");
    toggleElement.classList.add("fa-caret-up");
}

const hideElement = (targetElement, toggleElement) => {
    targetElement.style.display = "none";
    toggleElement.addEventListener("click", () => showElement(targetElement, toggleElement));
    toggleElement.classList.remove("fa-caret-up");
    toggleElement.classList.add("fa-caret-down");
}

for (let toggleElement of dropdownToggles) {
    const targetElementSelector = toggleElement.getAttribute("data-target");
    const targetElement = document.querySelector(targetElementSelector);

    toggleElement.addEventListener("click", () => showElement(targetElement, toggleElement));
}



