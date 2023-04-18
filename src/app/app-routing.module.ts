import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { BaseComponent } from './base/base.component';
const routes: Routes = [ 
   {path: 'BaseComponent',
    pathMatch: 'full',
    component:BaseComponent },
  {path: 'insert' ,component:InsertComponent},
  {path: 'base' ,component:BaseComponent},
  {path: 'view' ,component:ViewComponent},
  {path: 'delete' ,component:DeleteComponent},
  {path: 'update' ,component:UpdateComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
