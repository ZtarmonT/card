import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SmartComponent } from './smart/smart.component';
import { NoutComponent } from './nout/nout.component';
import { FilterComponent } from './filter/filter.component';

const routes = [
{path: '', component:CardComponent},
{path: 'nout', component:NoutComponent},
{path: 'smart', component:SmartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SmartComponent,
    NoutComponent,
    FilterComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
