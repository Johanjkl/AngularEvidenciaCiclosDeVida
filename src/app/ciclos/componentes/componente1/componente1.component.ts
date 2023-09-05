import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit, OnDestroy {
   constructor(private router: Router) {}

   ngOnInit(): void {
    console.log("Componente inicializado")
   }

   ngOnDestroy(): void {
    console.log("Componente destruido")
   }

   navegar() {
    this.router.navigate(['/comp2'])
   }
}
