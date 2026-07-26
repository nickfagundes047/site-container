const categorias = document.querySelectorAll(".categoria-card");

const areaCategorias = document.getElementById("categorias");
const listaProdutos = document.getElementById("lista-produtos");

const tituloCategoria = document.getElementById("titulo-categoria");
const produtos = document.getElementById("produtos");

const botaoVoltar = document.getElementById("voltar");

const contadorCarrinho = document.getElementById("contador-carrinho");

let carrinho = [];

function adicionarAoCarrinho(nome, preco) {

    carrinho.push({
        nome: nome,
        preco: preco
    });

contadorCarrinho.textContent = carrinho.length;
    
    console.log(carrinho);

}

const cardapios = {

    "X Gaúcho": `

<div class="produto">

    <h3>Xis Salada</h3>

    <p>Pão de 16 cm, maionese caseira, milho, ervilha, alface, tomate, ovo, queijo mussarela e o hamburguer.</p>

    <strong>R$ 25,00</strong><br><br>

    <button onclick="adicionarAoCarrinho('Xis Salada', 25.00)">+ Adicionar</button>

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

<div class="produto">

    <h3>Fritas Pequena</h3>

    <p>Porção de batata frita (200 g).</p>

    <strong>R$ 15,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Fritas Média</h3>

    <p>Porção de batata frita (400 g).</p>

    <strong>R$ 30,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Fritas Grande</h3>

    <p>Porção de batata frita (700 g).</p>

    <strong>R$ 40,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Fritas com Bacon e Cheddar</h3>

    <p>Porção de batata frita (700 g), bacon e cheddar cremoso.</p>

    <strong>R$ 65,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Porção de Polenta</h3>

    <p>Porção de polenta frita (400 g).</p>

    <strong>R$ 25,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Anéis de Cebola</h3>

    <p>Porção de onion rings (400 g).</p>

    <strong>R$ 38,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Camarão Soltinho</h3>

    <p>Porção de camarão empanado (400 g).</p>

    <strong>R$ 90,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Porção de Tilápia</h3>

    <p>Porção de tilápia (400 g).</p>

    <strong>R$ 75,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Porção de Peixe</h3>

    <p>Porção de peixe (400 g).</p>

    <strong>R$ 60,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Bolinho de Peixe</h3>

    <p>Porção com 12 bolinhos de peixe.</p>

    <strong>R$ 50,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Anéis de Lula</h3>

    <p>Porção de anéis de lula empanados (400 g).</p>

    <strong>R$ 80,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Bolinho de Camarão</h3>

    <p>Porção com 12 bolinhos de camarão.</p>

    <strong>R$ 55,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Frango a Passarinho</h3>

    <p>Porção de frango a passarinho (700 g).</p>

    <strong>R$ 55,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

    `,

    "Pratos": `

<div class="produto">

    <h3>Prato Executivo - Carne</h3>

    <p>Arroz, feijão, fritas, salada, ovo e carne bovina.</p>

    <strong>R$ 35,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Prato Executivo - Frango</h3>

    <p>Arroz, feijão, fritas, salada, ovo e filé  de frango.</p>

    <strong>R$ 35,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Prato Executivo - Filé de Peixe</h3>

    <p>Arroz, feijão, fritas, salada, ovo e filé de peixe.</p>

    <strong>R$ 35,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

    `,

    "Bebidas": `

<div class="produto">

    <h3>Coca-Cola Lata</h3>

    <p>Refrigerante em lata (350 ml).</p>

    <strong>R$ 7,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Coca-Cola Zero Lata</h3>

    <p>Refrigerante em lata (350 ml).</p>

    <strong>R$ 7,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Sprite Lata</h3>

    <p>Refrigerante em lata (350 ml).</p>

    <strong>R$ 7,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Fanta Laranja Lata</h3>

    <p>Refrigerante em lata (350 ml).</p>

    <strong>R$ 7,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Fanta Uva Lata</h3>

    <p>Refrigerante em lata (350 ml).</p>

    <strong>R$ 7,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Tônica Lata</h3>

    <p>Refrigerante em lata (350 ml).</p>

    <strong>R$ 7,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Citrus Lata</h3>

    <p>Refrigerante em lata (350 ml).</p>

    <strong>R$ 7,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Baly</h3>

    <p>Energético latão 473ml.</p>

    <strong>R$ 12,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Monster</h3>

    <p>Energético latão 473ml.</p>

    <strong>R$ 15,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>H2O</h3>

    <p>Bebida saborizada 500ml.</p>

    <strong>R$ 9,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Água Mineral</h3>

    <p>Garrafa de água mineral 500ml.</p>

    <strong>R$ 5,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Água Mineral com gás</h3>

    <p>Garrafa de água mineral 500ml.</p>

    <strong>R$ 5,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>


<div class="produto">

    <h3>Corona Long Neck</h3>

    <p>Cerveja Long Neck.</p>

    <strong>R$ 15,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Heineken Long Neck</h3>

    <p>Cerveja Long Neck.</p>

    <strong>R$ 15,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Heineken Long Neck Sem Álcool</h3>

    <p>Cerveja Long Neck sem álcool.</p>

    <strong>R$ 15,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Amstel Lata</h3>

    <p>Cerveja em lata.</p>

    <strong>R$ 8,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

<hr>

<div class="produto">

    <h3>Brahma Lata</h3>

    <p>Cerveja em lata.</p>

    <strong>R$ 8,00</strong><br><br>

    <button>+ Adicionar</button>

</div>

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
