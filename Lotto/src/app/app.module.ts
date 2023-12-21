import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { NumbersGridBoxComponent } from './components/numbers-grid-box/numbers-grid-box.component';
import { SuperzahlComponent } from './components/superzahl/superzahl.component';
import { TicketGeneratorComponent } from './components/ticket-generator/ticket-generator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    NumbersGridBoxComponent,
    SuperzahlComponent,
    TicketGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
