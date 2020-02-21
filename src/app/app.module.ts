import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {shoppingCartReducer} from './shared/reducers/shopping-cart.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HeaderComponent } from './commons/header/header.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ProductsComponent } from './products/products.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule} from '@angular/material/select';
import { MatBadgeModule} from '@angular/material/badge';
import { MatRadioModule} from '@angular/material/radio';
import { MatExpansionModule} from '@angular/material/expansion';
import { CdkTableModule} from '@angular/cdk/table';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StoreModule} from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { ZipcodeComponent } from './home/zipcode/zipcode.component';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { OrganzierloginComponent } from './organzierlogin/organzierlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    OrdersComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ZipcodeComponent,
    OrganzierloginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSelectModule,
    MatBadgeModule,
    MatRadioModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatExpansionModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    Ng2SearchPipeModule,
    NgxDaterangepickerMd,
    StoreModule.forRoot({
      items: shoppingCartReducer,
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRmUHSGdvGSNP3Nn8PYy-ET6dnYrJg1Ws',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
