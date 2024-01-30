import { Component } from '@angular/core';

@Component({
  selector: 'app-main-project',
  templateUrl: './main-project.component.html',
  styleUrls: ['./main-project.component.css'],
})
export class MainProjectComponent {
  hideBol = false;

  hideSlide() {
    this.hideBol = !this.hideBol;
  }
  bolEmitterPare(event: any) {
    this.hideBol = event;
    console.log('event-----', event);
  }
}
