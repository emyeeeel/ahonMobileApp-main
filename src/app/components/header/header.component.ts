import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [IonicModule, CommonModule],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  missionStarted = false; 

  constructor() {}

  ngOnInit() {}

  startMission() {
    this.missionStarted = true;
  }

  endMission() {
    this.missionStarted = false;
  }
}
