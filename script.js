// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtener la URL actual
    const currentUrl = window.location.pathname;
    const page = currentUrl.split("/").pop();

    // Seleccionar todos los enlaces del menú
    const menuLinks = document.querySelectorAll(".nav-menu a");

    // Asignar la clase 'active' al enlace correspondiente
    menuLinks.forEach(link => {
        if (link.getAttribute("href") === page || (page === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        }
    });
});