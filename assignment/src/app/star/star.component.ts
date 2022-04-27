import { Component} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  ip = "star";
  public onEditClick() {
    if(this.ip == "star"){
    this.ip = "star_border";
    }
    else
      this.ip = "star";
  }

}
