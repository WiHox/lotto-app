import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { NumbersGridBoxComponent } from './components/numbers-grid-box/numbers-grid-box.component';
import { SuperzahlComponent } from './components/superzahl/superzahl.component';
import { TicketGeneratorComponent } from './components/ticket-generator/ticket-generator.component';
import { FormsModule } from '@angular/forms';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { TicketViewComponent } from './components/ticket-view/ticket-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    NumbersGridBoxComponent,
    SuperzahlComponent,
    TicketGeneratorComponent,
    TicketsListComponent,
    TicketViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: TicketGeneratorComponent },
        { path: 'tickets', component: TicketsListComponent },
        { path: 'tickets/:id', component: TicketViewComponent },
        { path: '**', component: TicketGeneratorComponent },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
