import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './components/test/test.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TraerapiComponent } from './components/traerapi/traerapi.component';
import { ContenedorapiComponent } from './components/contenedorapi/contenedorapi.component'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SelectorComponent,
    TraerapiComponent,
    ContenedorapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
