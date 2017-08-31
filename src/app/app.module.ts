import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutModule } from './modules/about/about.module';
import { ContactModule } from './modules/contact/contact.module';
import { BlogModule } from './modules/blog/blog.module';
import { EventsModule } from './modules/events/events.module';
import { HomeModule } from './modules/home/home.module';
import { ErrorsModule } from './modules/errors/errors.module';

import { AppRoutingModule } from './app-routing.module';

import { BreadcrumbService } from './services/breadcrumb.service';
import { DummyDatabaseService } from './services/dummy-database.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AboutModule,
    ContactModule,
    BlogModule,
    EventsModule,
    HomeModule,
    ErrorsModule,
    AppRoutingModule
  ],
  providers: [
    BreadcrumbService,
    DummyDatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
