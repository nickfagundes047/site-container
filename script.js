const categorias = document.querySelectorAll(".categoria-card");
const listaProdutos = document.getElementById("lista-produtos");

categorias.forEach(categoria => {
    categoria.addEventListener("click", () => {
        listaProdutos.innerHTML = `
            <h3>🍔 Hambúrgueres Artesanais</h3>

            <p>Em breve os produtos aparecerão aqui.</p>
        `;
    });
});
