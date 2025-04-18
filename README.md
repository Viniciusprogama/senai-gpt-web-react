# senaigpt react
1. verificar se tenho a versao do Node v20 instalado.
[Captura de tela 2025-04-14 211733](https://github.com/user-attachments/assets/9bc10e2f-4cc8-4b76-8280-4037b702ef61)
se não tiver instale a versao v20 do Node
2. instalando a versão reinicie o computador
3. agora entre no cmd e digite esse comando npm create vite@latest senai-gpt-web-react -- --template react e clique y para aceitar
4. de um cd "nome da pasta que voce criou"
5. depois escreva code . para entra no vscode na pasta que a gente criou o template do projeto
#  login
7. depois abra o terminal no vscode e digite um npm install para instalar as dependencias
8. depois digite npm run dev   
9. criar uma pasta style dentro do src
10. cria um arquivo global css dentro do style
11. dentro a do arquivo copie cole o global css do senai gpt e coloque nesse projeto e importei o global css no main.jsx
12. cria uma pasta login dentro da pasta page
13. cria dois arquivo 1 index.jsx 2 login.css
14. colocar o html do seu codigo do senaigpt dentro do index.jsx
15. coloca o css dentro da login.css
16. cria uma pasta dentro da pasta dentro do src chamada imgs
17. colocar todas as fotos do projeto dentro de imgs
18. depois disso criamos duas const uma para email e outra para senha criamos isso para guarda a senha e o email do usuario
19. cololcar onchange nos inputs
20. criar um metodo onloginclick
21. e fazer a requisição da api
22. depois criamos 2 if e 2 else
23. no 1 if caso o usuario colocasse o email a senha certas nos criarimos um token para ele nao precisa entra na conta dele toda vez que ele sai do site e tambem colocamos para ir para tela principal
24. no 2 if colocamos se desse erro 401 criamos um alert escrito:credenciais incorretas. tente novamente
25. no 2 else nois colocamos outro alert escrito:erro inesperado aconteceu. caso persista contate os administradores    
