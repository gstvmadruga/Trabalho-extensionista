    // ============================
    // FORMULÁRIO VOLUNTÁRIO
    // ============================
    const voluntarioForm = document.getElementById("voluntario-form");
    const parceiroForm = document.getElementById("parceiro-form");
    const contatoForm = document.getElementById("contato-form"); // futuro uso
    const modal = document.getElementById("thankyou-modal");
    const closeModal = document.querySelector(".close");

    // Abre o modal se a view mandou a flag
    if (modal && modal.dataset.show === "true") {
        modal.style.display = "flex";
    }

    // Fechar o modal
    if (closeModal) {
        closeModal.onclick = function () {
            modal.style.display = "none";
        };
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };