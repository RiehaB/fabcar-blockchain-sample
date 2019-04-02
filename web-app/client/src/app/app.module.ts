import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QueryAllCarsComponent } from './query-all-cars/query-all-cars.component';
import { ApiService } from './api.service';
import { QueryAllCarsService } from './query-all-cars/query-all-cars.service';
import { CreateCarComponent } from './submit-component/create-car/create-car.component';
import { ChangeCarOwnerComponent } from './submit-component/change-car-owner/change-car-owner.component';
import { CreateCarFormComponent } from './submit-component/create-car/create-car-form/create-car-form.component';
import { ChangeCarOwnerFormComponent } from './submit-component/change-car-owner/change-car-owner-form/change-car-owner-form.component';
import { SubmitComponent } from './submit-component/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryAllCarsComponent,
    CreateCarComponent,
    ChangeCarOwnerComponent,
    CreateCarFormComponent,
    ChangeCarOwnerFormComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    QueryAllCarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
