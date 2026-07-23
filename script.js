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
<div class="produto">

    <h3>Xis Salada</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo muçarela e o recheio escolhido.</p>

    <strong>R$ 25,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Frango</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo muçarela e o recheio escolhido.</p>

    <strong>R$ 25,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Calabresa</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo muçarela e o recheio escolhido.</p>

    <strong>R$ 30,00</strong><br><br>

    <button>+ Adicionar</button>

</div>
`;

    });

});

botaoVoltar.addEventListener("click", () => {

    listaProdutos.style.display = "none";

    areaCategorias.style.display = "flex";

});
