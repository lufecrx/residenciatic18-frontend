import { Component } from '@angular/core';
import { Treatment } from '../../model/treatment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment-search',
  templateUrl: './treatment-search.component.html',
  styleUrls: ['./treatment-search.component.css']
})
export class TreatmentSearchComponent {
  searchTerm: string = ''; // Termo de pesquisa
  treatments: Treatment[] = []; // Lista de atendimentos

  constructor(
    private router: Router
    ) { }

  // Método para acionar a pesquisa quando o usuário pressionar Enter
  onEnter(): void {
      this.router.navigate(['/resultados/' + this.searchTerm]);
  }

  clearSearch(): void {
    this.searchTerm = '';
  }
}
