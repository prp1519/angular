import { Component} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  btnText = '';
  buttonClick1() {
    if(this.btnText == "You have choosen angular framework"){
      this.btnText = "You choose to hide the content";
      }
      else
        this.btnText = "You have choosen angular framework";
    }

}
