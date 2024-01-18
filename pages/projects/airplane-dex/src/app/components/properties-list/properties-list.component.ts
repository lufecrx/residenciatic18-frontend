import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JumpingEffectDirective } from '../../directives/jumping-effect.directive';

@Component({
  selector: 'app-properties-list',
  standalone: true,
  imports: [CommonModule, JumpingEffectDirective],
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent {
  @Input() vehicleSelected: any;
  @Output() propertySelected = new EventEmitter<string>();

  selectProperty(property: string) {
    this.propertySelected.emit(property);
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
