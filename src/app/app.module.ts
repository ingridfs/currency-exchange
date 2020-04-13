//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Services
import { CurrencyService } from './currency.service';

//Components
import { AppComponent } from './app.component';
import { MainCardComponent } from './main-card/main-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavCurrenciesComponent } from './nav-currencies/nav-currencies.component';

//Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';

//Pipe
import { FormattingPipe } from './currencyformatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    CalculatorComponent,
    FormattingPipe,
    NavCurrenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
