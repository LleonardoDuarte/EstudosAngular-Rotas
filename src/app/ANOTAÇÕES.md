# Anotações de rotas

- Para criar as rotas precisamos passar isso dentro de um array de objetos {}
  usando path, exemplo: { path: '', component: TitleComponent, pathMatch: 'full' }

- O pathMatch serve para definir se a rota será exatamente o que voce colocou (full) ou se a rota tiver um prefixo vazio ira cair no caminho que voce colocou e também pode-se adicionar mais outras coisas, por default o pathmatch vem prefix.

- rota coringa é quando voce configura qualquer rota que nao exista no padrao ao qual levará o usuario para uma página que voce decidir, exemplo uma página onde terá um aviso de que aquele caminho nao exista e botoes para direcionar o mesmo as telas existentes. Exemplo de rota coringa: {path:'\*\*', redirectTo:''}, caso voce deixe o redirect vazio ele direcionará o usuario novamente para a pagina principal configurada.

- A respeito de componentes de direcionamento no html (a), ao inves de usarmos href usaremos o [RouterLink] pois a ideia de usar um framework com single page aplication é justamente nao recarregar a página e se usarmos o href isso acontece, já com o routerlink nao. Exemplo: <a [routerLink]="['/portfolio']">PORTFOLIO</a>


