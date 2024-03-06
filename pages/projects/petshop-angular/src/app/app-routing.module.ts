import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentRegistrationComponent } from './components/treatment-registration/treatment-registration.component';
import { TreatmentListComponent } from './components/treatment-list/treatment-list.component';
import { TreatmentEditComponent } from './components/treatment-edit/treatment-edit.component';
import { TreatmentResultComponent } from './components/treatment-result/treatment-result.component';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: TreatmentRegistrationComponent },
  { path: 'listagem', component: TreatmentListComponent },
  { path: 'edicao', component: TreatmentEditComponent },
  { path: 'resultados/:searchTerm', component: TreatmentResultComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
