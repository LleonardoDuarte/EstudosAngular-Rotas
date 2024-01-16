# Anotações de rotas

- Para criar as rotas precisamos passar isso dentro de um array de objetos {}
  usando path, exemplo: { path: '', component: TitleComponent, pathMatch: 'full' }

- O pathMatch serve para definir se a rota será exatamente o que voce colocou (full) ou se a rota tiver um prefixo vazio ira cair no caminho que voce colocou e também pode-se adicionar mais outras coisas, por default o pathmatch vem prefix.

- rota coringa é quando voce configura qualquer rota que nao exista no padrao ao qual levará o usuario para uma página que voce decidir, exemplo uma página onde terá um aviso de que aquele caminho nao exista e botoes para direcionar o mesmo as telas existentes. Exemplo de rota coringa: {path:'\*\*', redirectTo:''}, caso voce deixe o redirect vazio ele direcionará o usuario novamente para a pagina principal configurada.

- A respeito de componentes de direcionamento no html (a), ao inves de usarmos href usaremos o [RouterLink] pois a ideia de usar um framework com single page aplication é justamente nao recarregar a página e se usarmos o href isso acontece, já com o routerlink nao. Exemplo: <a [routerLink]="['/portfolio']">PORTFOLIO</a>

- É possivel criar uma classe para o routerlink ativo usando o [RouterLinkActive]="['classeaqui']" ao qual se pode criar uma classe e estilizar no css

- O [routerLinkActiveOptions]="{ exact: true }" serve para apenas ativar a classe quando o caminho for exatamente aquele, nesse caso adicionado isso a página home, quando clicarmos na aba portifolio a aba home nao ira exibir o css pois o caminho agora está como /portifolio.

- para que se possa resgatar parametro de rotas como id usamos this.nome.params.subscribe para poder resgatar o que foi colocado no nosso module de rotas, caso a pessoa deseja ter um token e deseja resgatar usa-se this.nome.queryparams.subscribe

- Para que se possa fazer um direcionamento forçado de página dentro do constructor criamos um private usando o parametro Router e no nosso ng init podemos colocar os parametros de rota que e quantidade de tempo que colocaremos para que ele force o retorno
  exemplo:
  <!-- Constructor -->
  private navegador: Router

<!-- ngInit -->

ngOnInit(): void {
setInterval(() => {
this.navegador.navigate(['/']);
}, 5000);
}
