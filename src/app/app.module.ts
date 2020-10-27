import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule }  from '@angular/forms';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { UploadComponent } from './upload/upload.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AgGridModule } from 'ag-grid-angular';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FileuploadComponent,
    UploadComponent,
    NotfoundComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path :'login', component:LoginComponent},
      { path :'register', component:RegisterComponent},
      { path :'upload', component:UploadComponent },
      { path :'contact', component:ContactsComponent },
      { path :'file', component:FileuploadComponent },
      { path :'**', component: NotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
