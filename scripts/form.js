const products = [
    { name: "SuperVac 3000" },
    { name: "DustBeGone Pro" },
    { name: "CleanSweep Mini" }
];

window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
});
