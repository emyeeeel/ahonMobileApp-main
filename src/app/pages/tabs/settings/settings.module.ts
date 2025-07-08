import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { HeaderComponent } from "src/app/components/header/header.component";
import { VictimInfoComponent } from "src/app/components/victim-info/victim-info.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    HeaderComponent,
    VictimInfoComponent
],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
