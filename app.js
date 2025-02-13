//Criar lista para guardar os nomes digitados
let nomes = [];
let nomesSorteio = []

//Função executada ao clicar no botar "Adicionar". 
// 1. Acessa o id = "nomeInput" no HTML que é uma tag de input. 
// 2. Captura o valor desse elemento e executa um trim() para limpar espaços vazios no texto. 
// 3. Garante que a primeira letra do nome seja uma letra maiúscula. 
// 4. Verifica se há algo digitado no input, se estiver vazio avisa o usuário para que ele digite algum nome. 
// 5. Adiciona o nome na lista nomes 
// 6. Executa a função atualizarLista, que basicamente atualiza o HTML para mostrar uma lista com os nomes. 
// 7. Reseta o valor do input para uma string vazia.
function adicionarAmigo() {
    let input = document.getElementById("nomeInput");
    let nome = input.value.trim()
    nome = nome.charAt(0).toUpperCase() + nome.slice(1);
        if (nome === "") {
            alert("Insira um nome!");
            return;
        }
        nomes.push(nome);
        nomesSorteio.push(nome)

        atualizarLista();
        input.value = "";
        }

//Função chamada durante a execução de adicionarAmigo
// 1. Cria uma var lista que captura a <ul> com a id listaNomes.
// 2. Reseta os itens da lista para uma string vazia para evitar duplicação de nomes.
//3. Utiliza a função forEach() com o comando de que para cada valor nome executar um código que:
// Cria um elemento de item de lista (<li>)
// Determina seu valor, ou texto, como o valor representado pela variável nome.
// Adiciona o item de lista (<li>) como uma child na <ul> com id="listaNomes". 
function atualizarLista() {
    let lista = document.getElementById("listaNomes");
    // Reset da lista, para evitar repetições
    lista.innerHTML = "";
    nomes.forEach(nome => {
    let li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
    });
}

//Função para sortear um dos nomes digitados.
// 1. Checa se há mais de 1 nome na lista.
// 2. Chama a função shuffleArray() que embaralha os nomes.
// 3. Cria a variável amigo que assume o primeiro valor dessa nova lista embaralhada e em seguida é exibido um texto na tela com a mensagem: "Seu amigo secreto é: (NOME DO AMIGO)"
// 4. Deleta-se o nome sorteado da lista que alimenta o sorteio e o botão de sorteio é desativado.
// 5. Quando todos os nomes são sorteados é exibida uma mensagem que diz que o sorteio chegou ao fim pois todos os nomes foram sorteados e os botões de sorteio e limpar resultado são desativados.
function sortearAmigo() {
    if (nomes.length < 2) {
    alert("Adicione pelo menos 2 nomes para o sorteio!");
    return;
    }

    botaoAdd = document.getElementById("botao-add")
    botaoAdd.disabled = true
    
    let sorteio = shuffleArray(nomesSorteio);
    amigo = sorteio[0];
    mensagem = `Seu amigo secreto é: <span style="color: #c33b0a;">${amigo}</span>!`
    document.getElementById("resultado").innerHTML = `${mensagem}<br><span class="texto-aviso">Clique em limpar resultado e chame o próximo participante!</span>`;
    let index = nomesSorteio.indexOf(amigo);

    if (index !== -1) {
        nomesSorteio.splice(index, 1);
    }
    botao = document.getElementById("botao-sorteio")
    botao.disabled = true
    if (nomesSorteio.length == 0) {
        parent = document.getElementById('resultado')
        parent.innerHTML = `${mensagem} <br><span class="texto-aviso">Todos os nomes foram sorteados!</span>`
        botaoSorteio = document.getElementById("botao-sorteio")
        botaoSorteio.disabled = true
        botaoLimpar = document.getElementById("botao-limpar-resultado")
        botaoLimpar.disabled = true
    }
}

//Função para embaralhar a lista, utilizou-se o algoritmo de Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }

//Função para limpar o resultado exibido na tela
function limparResultado() {
    let lista = document.getElementById("resultado")  
    lista.innerHTML = ""
    botao = document.getElementById("botao-sorteio")
    botao.disabled = false
}

//Função para limpar todos os dados do jogo, permitindo a criação de uma nova lista.
function limparTudo() {
    location.reload()
    botaoAdd = document.getElementById("botao-add")
    botaoAdd.disabled = false
}

   
