import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }


  // Old
  loadData_(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 100) {
        event.target.disabled = true;
      }
    }, 500);
  }

  // New
  loadData(event) {
    setTimeout(() => {

      if (this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      this.infiniteScroll.complete();
    }, 500);
  }

}
