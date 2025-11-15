// script.js — versão limpa, corrigida e funcional
document.addEventListener("DOMContentLoaded", () => {

    console.log("[script.js] carregado");

    // ============================
    // MENU HAMBURGER
    // ============================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navMenu && navLinks) {
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active");
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active");
        });

        // fechar ao clicar em um link
        navLinks.querySelectorAll("a").forEach((a) => {
            a.addEventListener("click", () => {
                navMenu.classList.remove("active");
                navLinks.classList.remove("active");
                hamburger.classList.remove("active");
            });
        });

        // fechar clicando fora
        document.addEventListener("click", (e) => {
            if (
                window.innerWidth <= 768 &&
                navMenu.classList.contains("active") &&
                !navMenu.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {
                navMenu.classList.remove("active");
                navLinks.classList.remove("active");
                hamburger.classList.remove("active");
            }
        });
    }

    // ============================
    // FORMULÁRIO DE VOLUNTÁRIO
    // ============================
    const modal = document.getElementById("thankyou-modal");
    const closeBtn = modal ? modal.querySelector(".close") : null;

    // Se Django mandou "show_modal=True", abre automaticamente
    if (typeof SHOW_MODAL !== "undefined" && SHOW_MODAL === true) {
        modal.style.display = "flex";
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });
    }

    // OBS: nenhum formulário tem preventDefault agora.
    // Todos os formulários enviam normalmente para o Django.

});
