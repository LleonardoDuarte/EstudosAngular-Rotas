import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private navegador: Router) {
    // como recuperar parametros de rota
    //http://localhost:4200/portofolio/{1}
    this.activeRoute.params.subscribe((res) => console.log(res));

    // Buscando os dados da primeira filha
    this.activeRoute.firstChild?.params.subscribe((res) => console.log(res));

    // como recuperar query params
    // http://localhost:4200/portifolio/1?{name=leonardo&token=123}
    this.activeRoute.queryParams.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/']);
    // }, 5000);
  }
}
