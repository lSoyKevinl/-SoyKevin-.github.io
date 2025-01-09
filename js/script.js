//Solicitar Presupuesto
document.addEventListener("DOMContentLoaded", function() {
    var presupuestoModal = document.getElementById("solicitarPresupuestoModal");
    var presupuestoBtn = document.getElementById("solicitarPresupuestoBtn");
    var presupuestoClose = document.getElementById("closePresupuesto");

    presupuestoBtn.onclick = function() {
        presupuestoModal.style.display = "block";
    }

    presupuestoClose.onclick = function() {
        presupuestoModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == presupuestoModal) {
            presupuestoModal.style.display = "none";
        }
    }
});