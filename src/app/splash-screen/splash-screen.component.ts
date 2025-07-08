import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  imports: [IonicModule],
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/tabs');
    }, 1000);
  }

}
