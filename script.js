const categorias = document.querySelectorAll(".categoria-card");

const areaCategorias = document.getElementById("categorias");
const listaProdutos = document.getElementById("lista-produtos");

const tituloCategoria = document.getElementById("titulo-categoria");
const produtos = document.getElementById("produtos");

const botaoVoltar = document.getElementById("voltar");

const cardapios = {

    "X Gaúcho": `

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

<hr>

<div class="produto">

    <h3>Xis Burguer</h3>

    <p>Pão de 16 cm, maionese caseira, ovo, queijo mussarela e hamburguer.</p>

    <strong>R$ 18,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis Bagunça</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela e 150g de coração, calabresa, frango e bacon.</p>

    <strong>R$ 36,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Xis vegetariano</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, 2x ovo e 2x queijo mussarela.</p>

    <strong>R$ 22,00</strong><br><br>

    <button>+ Adicionar</button>

</div>
    `,

    "Hambúrgueres Artesanais": `

<div class="produto">

    <h3>O Container I</h3>

    <p>Pão brioche, 1 hambúrguer de 150 g, molho verde, cheddar cremoso, bacon em tiras, alface, tomate e onion rings. Acompanha uma porção de batata frita de 200 g.</p>

    <strong>R$ 40,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>O Container II</h3>

    <p>Pão brioche, 2 hambúrgueres de 150 g, molho verde, 2x cheddar cremoso, 2x bacon em tiras, alface, tomate e 2x onion rings. Acompanha uma porção de batata frita de 200 g.</p>

    <strong>R$ 45,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>O Container III</h3>

    <p>Pão brioche, 1 hambúrguer de 150 g, molho verde, cheddar cremoso, bacon em tiras, alface, tomate e cebola caramelizada. Acompanha uma porção de batata frita de 200 g.</p>

    <strong>R$ 40,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>O Container IV</h3>

    <p>Pão brioche, 2 hambúrgueres de 150 g, molho verde, 2x cheddar cremoso, 2x bacon em tiras, alface, tomate e 2x cebola caramelizada. Acompanha uma porção de batata frita de 200 g.</p>

    <strong>R$ 45,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

    `,

    "Cachorro-Quente": `

<div class="produto">

    <h3>Dog Simples</h3>

    <p>Pão, maionese caseira, milho, ervilha, alface, tomate, molho vermelho, batata palha e 1 salsicha.</p>

    <strong>R$ 18,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Dog Duplo</h3>

    <p>Pão, maionese caseira, milho, ervilha, alface, tomate, molho vermelho, batata palha e 2 salsichas.</p>

    <strong>R$ 20,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Dog Coração</h3>

    <p>Pão, maionese caseira, milho, ervilha, alface, tomate, molho vermelho, batata palha, 1 salsicha e 150 g de coração.</p>

    <strong>R$ 24,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Dog 3 Queijos</h3>

    <p>Pão, maionese caseira, milho, ervilha, alface, tomate, molho vermelho, batata palha, 2 salsichas, mussarela, Catupiry e cheddar cremoso.</p>

    <strong>R$ 28,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Dog Frango</h3>

    <p>Pão, maionese caseira, milho, ervilha, alface, tomate, molho vermelho, batata palha, 1 salsicha e 150g de frango.</p>

    <strong>R$ 22,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Dog Bacon</h3>

    <p>Pão, maionese caseira, milho, ervilha, alface, tomate, molho vermelho, batata palha, 1 salsicha e 150g de bacon.</p>

    <strong>R$ 24,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Dog Bacon e Cheddar</h3>

    <p>Pão, maionese caseira, milho, ervilha, alface, tomate, molho vermelho, batata palha, 1 salsicha, 150g de bacon e cheddar cremoso.</p>

    <strong>R$ 27,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Dog Frango com Catupiry</h3>

    <p>Pão, maionese caseira, milho, ervilha, alface, tomate, molho vermelho, batata palha, 1 salsicha, 150g de frango e Catupiry.</p>

    <strong>R$ 27,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

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
