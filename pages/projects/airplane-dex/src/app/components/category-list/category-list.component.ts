import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverStyleDirective } from '../../directives/hover-style.directive';
import { JumpingEffectDirective } from '../../directives/jumping-effect.directive';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, HoverStyleDirective, JumpingEffectDirective],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Input() categoryList: string[] = [];
  @Output() categorySelected = new EventEmitter<string>();

  filterByCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
