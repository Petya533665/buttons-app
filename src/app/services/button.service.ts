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
        width: 'auto' || 50,
        height: 'auto' || 50,
        padding: 15,
        customePadding: false,
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        border: '2px solid red',
        borderWidth: 2,
        borderColor: 'red',
        borderStyle: 'solid',
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
        background: 'rgb(255, 210, 17)',
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
        boxShadowTrue: true,
        boxShadowInset: false,
        boxShadowX: 10,
        boxShadowY: 10,
        boxShadowBlur: 10,
        boxShadowSpread: 10,
        boxShadowColor: '#ddd',
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
