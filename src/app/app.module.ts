import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Scenario3Component1 } from './Scenario3/component1/component1.component';
import { Scenario3Component2 } from './Scenario3/component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario3Component1,
    Scenario3Component2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
