import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JumpingEffectDirective } from '../../directives/jumping-effect.directive';
import { RotatingBackgroundColorDirective } from '../../directives/rotating-background-color.directive';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [CommonModule, JumpingEffectDirective, RotatingBackgroundColorDirective],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.css'
})
export class VehiclesListComponent {
  @Input() vehiclesList: any[] = [];
  @Output() vehicleSelected = new EventEmitter<any>();

  selectVehicle(vehicle: any) {
    this.vehicleSelected.emit(vehicle);
  }
}
