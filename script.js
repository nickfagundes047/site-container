const categorias = document.querySelectorAll(".categoria-card");

const areaCategorias = document.getElementById("categorias");
const listaProdutos = document.getElementById("lista-produtos");

const tituloCategoria = document.getElementById("titulo-categoria");
const produtos = document.getElementById("produtos");

const botaoVoltar = document.getElementById("voltar");

const cardapios = {

    "X Gaúcho": `

    `,

    "Hambúrgueres Artesanais": `

    `,

    "Cachorro-Quente": `

    `,

    "Porções": `

    `,

    "Pratos": `

    `,

    "Bebidas": `

    `,

    "Açaí": `

    `

};

categorias.forEach(categoria => {

    categoria.addEventListener("click", () => {

        areaCategorias.style.display = "none";
        listaProdutos.style.display = "block";

        const nomeCategoria = categoria.innerText;

        tituloCategoria.innerText = nomeCategoria;

        produtos.innerHTML = cardapios[nomeCategoria];

    });

});

botaoVoltar.addEventListener("click", () => {

    listaProdutos.style.display = "none";
    areaCategorias.style.display = "flex";

});
