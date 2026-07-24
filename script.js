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

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela e o hamburguer.</p>

    <strong>R$ 25,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Frango</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela e o frango 150g.</p>

    <strong>R$ 25,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Calabresa</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela e a calabresa 150g.</p>

    <strong>R$ 30,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Coração</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela e coração 150g.</p>

    <strong>R$ 32,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Bacon</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela, hamburguer e bacon.</p>

    <strong>R$ 34,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Acebolado</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela e hamburguer com cebola.</p>

    <strong>R$ 27,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Strogonoff</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela, batata palha e strogonoff 150g.</p>

    <strong>R$ 35,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Fricasse</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela, batata palha e fricasse 150g.</p>

    <strong>R$ 32,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Filé de carne</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela e iscas de carne 150g.</p>

    <strong>R$ 38,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Filé Acebolado</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela e  iscas de carne 150g com cebola.</p>

    <strong>R$ 40,00</strong><br><br>

    <button>+ Adicionar</button>

</div>
`;

    });

});

botaoVoltar.addEventListener("click", () => {

    listaProdutos.style.display = "none";

    areaCategorias.style.display = "flex";

});
