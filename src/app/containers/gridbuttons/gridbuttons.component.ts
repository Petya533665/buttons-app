import {Component, OnInit} from '@angular/core';
import {ButtonService} from '../../services/button.service';
import {Button} from '../../models/button';

@Component({
  selector: 'app-gridbuttons',
  templateUrl: './gridbuttons.component.html',
  styleUrls: ['./gridbuttons.component.css']
})
export class GridbuttonsComponent implements OnInit {

  buttons: any;

  constructor(private buttonService: ButtonService) {
  }

  ngOnInit() {
    this.buttons = this.buttonService.getButtons();

  }


}
