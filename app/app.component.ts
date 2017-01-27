import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <mapbox [center]="[-5.646973, 52.087483]">
    <div class="box" *ngIf="selectedMarker">
      <h2>{{selectedMarker.data.name}}</h2>
      <img [src]="selectedMarker.data.marker"/>
    </div>
    <mapbox-marker
        *ngFor="let place of places"
        flyTo="16"
        [image]="place.data.marker"
        [coordinates]="place.coordinates"
        [data]="place.data"
        (click)="placeClicked($event)">
    </mapbox-marker>
  </mapbox>`,
})
export class AppComponent  {
  // the selected Marker
  selectedMarker: Object;
  // list of places in England
  places: Array<Object> = [{
    coordinates: [0.164795, 52.197086],
    data: {
      name: "Cambridge",
      link: "https://www.google.co.uk/search?q=cambridge&safe=off&source=lnms&sa=X&ved=0ahUKEwj_6pS3v-LRAhVBAsAKHUrbA_sQ_AUIBygA&biw=1366&bih=662&dpr=1",
      marker: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/KingsCollegeChapelWest.jpg/280px-KingsCollegeChapelWest.jpg"
    }
  }, {
    coordinates: [-0.098877, 51.422761],
    data: {
      name: "London",
      marker: "https://pbs.twimg.com/profile_images/669253093142470656/3TC3dw7P.jpg",
      link: "https://www.google.co.uk/search?q=london&safe=off&biw=1366&bih=662&source=lnms&sa=X&ved=0ahUKEwik78L1v-LRAhWLCcAKHQBvBuYQ_AUIBygA&dpr=1"
    }
  }, {
    coordinates: [-0.104370, 50.817866],
    data: {
      name: "Brighton",
      marker: "https://pbs.twimg.com/profile_images/612291212008140800/gXf2uqTI.jpg",
      link: "https://www.google.co.uk/search?q=brighton&safe=off&biw=1366&bih=662&source=lnms&sa=X&ved=0ahUKEwjN04mtwOLRAhWFD8AKHT9yAQcQ_AUIBygA&dpr=1"
    }
  }];
  // function to run when a marker is clicked
  placeClicked(event: any) {
    // this will show the box with information about the places
    this.selectedMarker = event;

    console.log(event);
  }
}
