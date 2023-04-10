import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteComponent,
    InsertComponent,
    UpdateComponent,
    ViewComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
