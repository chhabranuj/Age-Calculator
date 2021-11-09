import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputContentComponent } from './components/input-content/input-content.component'; 
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '', component: InputContentComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
