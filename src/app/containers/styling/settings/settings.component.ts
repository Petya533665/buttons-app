import {Component, Input, OnInit} from '@angular/core';
import {Button} from '../../../models/button';
import {ButtonService} from '../../../services/button.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  button: Button;

  step = 0;

  constructor(private buttonService: ButtonService) {
  }


  ngOnInit() {
    this.buttonService.getButton().subscribe(button => {
      this.button = button;
      if (!button.customePadding) {
        this.button.paddingTop = button.padding;
        this.button.paddingLeft = button.padding;
        this.button.paddingRight = button.padding;
        this.button.paddingBottom = button.padding;
      }
      if (button.backgroundGradient) {
        this.button.background = 'linear-gradient(to ' + button.gradientTo + ', ' + button.backgroundStartColor + ', ' + button.backgroundEndColor + ')';
      } else {
        this.button.background = button.background;
      }
      button.boxShadowTrue ? this.button.boxShadow = button.boxShadowX + 'px ' + button.boxShadowY + 'px ' + button.boxShadowBlur + 'px ' + button.boxShadowSpread + 'px ' + button.boxShadowColor : '';
      button.textShadowTrue ? this.button.textShadow = button.textShadowX + 'px ' + button.textShadowY + 'px ' + button.textShadowBlur + 'px ' + button.textShadowColor : '';
      this.button.backgroundEndColor = button.backgroundEndColor;
      this.button.paddingTop = button.paddingTop;
      this.button.paddingLeft = button.paddingLeft;
      this.button.paddingRight = button.paddingRight;
      this.button.paddingBottom = button.paddingBottom;
      console.log('SettingsComponent', button);
    });


  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  updateButton(button) {
    this.buttonService.updateButton(button);
  }

}
