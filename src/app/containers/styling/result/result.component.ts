import {Component, OnInit} from '@angular/core';
import {ButtonService} from '../../../services/button.service';
import {Button} from '../../../models/button';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  button: Button;

  constructor(private buttonService: ButtonService) {
  }

  ngOnInit() {
    this.buttonService.getButton().subscribe(button => {
      this.button = button;
      console.log('ResultComponent', button);
    });
  }
}
