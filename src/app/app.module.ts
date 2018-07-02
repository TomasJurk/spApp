import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// SERVICES
import { DataService } from './core/data.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HowToComponent } from './how-to/how-to.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HowToComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
