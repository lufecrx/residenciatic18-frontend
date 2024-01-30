import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Input() projetos: string[] = [];
  @Input() projetoSelecionado: string = '';

  selecionarProjeto(projeto: string) {
    this.projetoSelecionado = projeto;
  }
}
