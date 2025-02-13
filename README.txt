Projeto: Amigo Secreto

Link GitHub Pages: https://haydeemagrina.github.io/challenge-amigo-secreto/

Descrição: O projeto se destina a incluir nomes dos amigos para sortear quem será o amigo secreto de cada um.

Funcionalidades: Cria uma lista com todos os nomes e sorteia um de cada vez até que todos os nomes sejam sorteados.
O botão sortear amigo irá ficar inativo, tem que apertar o botão limpar resultado para ele reativar e poder realizar novo sorteio.

Como utilizá-lo: 

1 - Digite um nome no campo indicado e aperte o botão adicionar, digite os próximos nomes, cada um de uma vez, sempre apertando o adicionar para formar uma lista.

2- Cada pessoa da lista deve apertar o botão Sortear amigo, para aparecer o nome sorteado.
Obs: Cada pessoa da lista deve fazer o seu sorteio para conhecer o amigo secreto de forma que ninguém mais veja o nome sorteado. 

3 - Aperte o botão limpar resultado para o próximo sorteio.

4 - Quando todos os nomes forem sorteados, irá aparecer uma mensagem informando. 

5 - Clique no botão Nova lista para apagar tudo e iniciar uma nova lista.

Instalação:

É necessário um editor de texto ou IDE, por exemplo, o Visual Studio Code.
Utilizei o LiveServer do VSCode para rodar o site, porém pode-se utilizar um navegador apenas.

Dependências:

Os únicos elementos externos ao JS, HTML e CSS seriam os ativos de imagens usados.

Problemas:

Ao pensar no projeto, quis transformar o site em uma simulação mais realista de um sorteio para um amigo secreto. Portanto foi necessário implementar algumas técnicas de manejamento de dados e interatividade com o Javascript.

Soluções:

Para que todos os nomes da lista fossem sorteados, um de cada vez, pelo usuário, fiz uma função sortearAmigo() que pega os nomes da lista, os embaralha, mostra ao usuário o resultado e depois deleta o nome da lista para evitar que o mesmo seja sorteado novamente. Para guiar o usuário durante o uso, utilizei o JS com o HTML e CSS para criar um fluxo de interação que permitisse cada integrante do jogo sortear o seu amigo secreto, ser impossibilitado de sortear novamente, com a desativação do botão, sobrando apenas a opção de limpar o resultado, evitando que outras pessoas descobrissem o nome. O próximo usuário vem e esse processo é repetido até que todos os nomes tenham sido sorteados, desativando os botões de sorteio e limpar resultado, sobrando apenas a opção de criar uma nova lista, apagando todos os dados. Dessa forma consegui simular um sorteio real. 





 


