import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductformComponent} from './productform/productform.component';
import {ProductlistComponent} from './productlist/productlist.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatGridListModule, MatInputModule, MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatSelectModule, MatSnackBar, MatSnackBarModule,
  MatTableModule, MatToolbarModule
} from "@angular/material";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttperrorInterceptor} from "./httperror.interceptor";
import {JwtModule} from "@auth0/angular-jwt";
import {ReactiveFormsModule} from "@angular/forms";
import {DateComponent} from "./date/date.component";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WarehouselistComponent } from './warehouselist/warehouselist.component';
import { WarehouseformComponent } from './warehouseform/warehouseform.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ProductformComponent,
    ProductlistComponent,
    DateComponent,
    LoginComponent,
    LogoutComponent,
    WarehouselistComponent,
    WarehouseformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    JwtModule.forRoot(
      {
        config: {
          tokenGetter,
          whitelistedDomains: ['localhost:4200']
        }
      }
    ),
    MatSnackBarModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttperrorInterceptor,
    multi: true,
    deps: [MatSnackBar]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
