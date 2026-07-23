const categorias = document.querySelectorAll(".categoria-card");

const areaCategorias = document.getElementById("categorias");
const listaProdutos = document.getElementById("lista-produtos");

const tituloCategoria = document.getElementById("titulo-categoria");
const produtos = document.getElementById("produtos");

const botaoVoltar = document.getElementById("voltar");

categorias.forEach(categoria => {

    categoria.addEventListener("click", () => {

        areaCategorias.style.display = "none";

        listaProdutos.style.display = "block";

        tituloCategoria.innerText = categoria.innerText;

        produtos.innerHTML = `
            <p>Em breve os produtos desta categoria aparecerão aqui.</p>
        `;

    });

});

botaoVoltar.addEventListener("click", () => {

    listaProdutos.style.display = "none";

    areaCategorias.style.display = "flex";

});
