import {Component, OnInit} from '@angular/core';
import {ButtonService} from '../../services/button.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  button: any;

  constructor(private buttonService: ButtonService) {
  }

  ngOnInit() {
    this.button = this.buttonService.button;
    this.buttonService.getButton().subscribe(button => {
      this.button.width = button.width + 'px';
      this.button.height = button.height + 'px';
      this.button.padding = button.padding + 'px';
      button.boxShadowTrue ? this.button.boxShadow = button.boxShadowX + 'px ' + button.boxShadowY + 'px ' + button.boxShadowBlur + 'px ' + button.boxShadowSpread + 'px ' + button.boxShadowColor : '';
      this.button.paddingTop = button.paddingTop + 'px';
      this.button.paddingLeft = button.paddingLeft + 'px';
      this.button.paddingRight = button.paddingRight + 'px';
      this.button.paddingBottom = button.paddingBottom + 'px';
      this.button.textValue = button.textValue;
      this.button.fontFamily = button.fontFamily;
      this.button.fontSize = button.fontSize + 'px';
      this.button.fontWeight = button.fontWeight;
      button.textShadowTrue ? this.button.textShadow = button.textShadowX + 'px ' + button.textShadowY + 'px ' + button.textShadowBlur + 'px '  + button.textShadowColor : '';
      this.button.borderRadius = button.borderRadius + button.borderRadiusUnit;
      this.button.border = button.borderWidth + 'px ' + button.borderStyle + ' ' + button.borderColor;
      if (button.backgroundGradient) {
        this.button.background = 'linear-gradient(to ' + button.gradientTo + ', ' + button.backgroundStartColor + ', ' + button.backgroundEndColor + ')';
      } else {
        this.button.background = button.background;
      }
      this.button.color = button.color;
      console.log('PreviewComponent', this.button);
    });
  }

}
