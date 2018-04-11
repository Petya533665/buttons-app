import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Button} from '../models/button';

@Injectable()
export class ButtonService {
  buttons: any;
  button: BehaviorSubject<Button>;

  constructor() {
    this.button = new BehaviorSubject(new Button());
    this.buttons = [
      {
        width: 50,
        height: 50,
        padding: 0,
        customePadding: false,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        border: '2px solid red',
        borderWidth: 0,
        borderColor: '',
        borderStyle: 'none',
        borderStyles: [
          {viewValue: 'none'},
          {viewValue: 'hidden'},
          {viewValue: 'dotted'},
          {viewValue: 'dashed'},
          {viewValue: 'solid'},
          {viewValue: 'double'},
          {viewValue: 'groove'},
          {viewValue: 'ridge'},
          {viewValue: 'inset'},
          {viewValue: 'outset'}],
        borderRadius: 15,
        borderRadiusUnit: 'px',
        borderRadiusUnits: [
          {viewValue: '%'},
          {viewValue: 'px'},
          {viewValue: 'rem'}
        ],
        background: 'rgba(255,0,0,1)',
        backgroundGradient: false,
        backgroundStartColor: '',
        backgroundEndColor: '',
        gradientTo: 'left',
        gradientToList: [
          {viewValue: 'left'},
          {viewValue: 'right'},
          {viewValue: 'top'},
          {viewValue: 'bottom'}
        ],
        boxShadow: '10px 10px 10px 10px #ddd',
        boxShadowTrue: false,
        boxShadowInset: false,
        boxShadowX: 0,
        boxShadowY: 0,
        boxShadowBlur: 0,
        boxShadowSpread: 0,
        boxShadowColor: '',
        textValue: 'First CSS',
        color: 'yellow',
        fontFamily: 'serif',
        fontFamilys: [
          {viewValue: '"Times New Roman"'},
          {viewValue: '"Arial"'},
          {viewValue: '"Impact"'},
          {viewValue: '"Verdana"'},
          {viewValue: 'sans-serif'},
          {viewValue: 'serif'}
        ],
        fontSize: '18',
        fontWeight: 'bold',
        fontWeights: [
          {viewValue: '100'},
          {viewValue: '200'},
          {viewValue: '300'},
          {viewValue: '400'},
          {viewValue: '500'},
          {viewValue: '600'},
          {viewValue: '700'},
          {viewValue: '800'},
          {viewValue: '900'},
          {viewValue: 'bold'},
        ],
        textShadow: '',
        textShadowTrue: false,
        textShadowX: 0,
        textShadowY: 0,
        textShadowBlur: 0,
        textShadowColor: 0,
        class: 'myClassFirst'
      }, {
        width: 10,
        height: 10,
        padding: 10,
        customePadding: false,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        border: '',
        borderWidth: 0,
        borderColor: '',
        borderStyle: 'none',
        borderStyles: [
          {viewValue: 'none'},
          {viewValue: 'hidden'},
          {viewValue: 'dotted'},
          {viewValue: 'dashed'},
          {viewValue: 'solid'},
          {viewValue: 'double'},
          {viewValue: 'groove'},
          {viewValue: 'ridge'},
          {viewValue: 'inset'},
          {viewValue: 'outset'}],
        borderRadius: 0,
        borderRadiusUnit: 'px',
        borderRadiusUnits: [
          {viewValue: '%'},
          {viewValue: 'px'},
          {viewValue: 'rem'}
        ],
        background: 'rgba(0,0,0,1)',
        backgroundGradient: false,
        backgroundStartColor: '',
        backgroundEndColor: '',
        gradientTo: 'left',
        gradientToList: [
          {viewValue: 'left'},
          {viewValue: 'right'},
          {viewValue: 'top'},
          {viewValue: 'bottom'}
        ],
        boxShadow: '',
        boxShadowTrue: false,
        boxShadowInset: false,
        boxShadowX: 0,
        boxShadowY: 0,
        boxShadowBlur: 0,
        boxShadowSpread: 0,
        boxShadowColor: '',
        textValue: 'Second CSS',
        color: '',
        fontFamily: 'sans-serif',
        fontFamilys: [
          {viewValue: '"Times New Roman"'},
          {viewValue: '"Arial"'},
          {viewValue: '"Impact"'},
          {viewValue: '"Verdana"'},
          {viewValue: 'sans-serif'},
          {viewValue: 'serif'}
        ],
        fontSize: '',
        fontWeight: '',
        fontWeights: [
          {viewValue: '100'},
          {viewValue: '200'},
          {viewValue: '300'},
          {viewValue: '400'},
          {viewValue: '500'},
          {viewValue: '600'},
          {viewValue: '700'},
          {viewValue: '800'},
          {viewValue: '900'},
          {viewValue: 'bold'},
        ],
        textShadow: '',
        textShadowTrue: false,
        textShadowX: 0,
        textShadowY: 0,
        textShadowBlur: 0,
        textShadowColor: 0,
        class: 'myClassSecond'
      }
    ];
  }

  updateButton(button) {
    this.button.next(button);
  }

  getButton() {
    return this.button.asObservable();
  }

  getButtons() {
    return this.buttons;
  }

  getCurrentButton() {
    return this.button.getValue();
  }
}
