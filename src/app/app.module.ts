import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';
import { AuthHttpInterceptor } from './auth/auth-http-interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
