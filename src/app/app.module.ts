
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { InsertionComponent } from './insertion/insertion.component';
import { NotificationComponent } from './notification/notification.component';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { EditComponent } from './edit/edit.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {CheckboxModule, DropdownModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {InsertionService} from './insertion.service';
import {ImageUploadModule} from 'angular2-image-upload';
import 'rxjs/Rx';


@NgModule({
  declarations: [
    AppComponent,
    ConsultationComponent,
    InsertionComponent,
    NotificationComponent,
    NavbarComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'}),
    // HttpClientInMemoryWebApiModule.forRoot(
    // InMemoryDataService, { dataEncapsulation: false},
    // ),
    BrowserAnimationsModule,
    ImageUploadModule.forRoot()
  ],
  providers: [InsertionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
