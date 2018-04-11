export class Button {
  width: number;
  height: number;
  padding: number;
  customePadding = false;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  border: string;
  borderWidth = 0;
  borderColor: string;
  borderStyle = 'none';
  borderStyles: any = [
    {viewValue: 'none'},
    {viewValue: 'hidden'},
    {viewValue: 'dotted'},
    {viewValue: 'dashed'},
    {viewValue: 'solid'},
    {viewValue: 'double'},
    {viewValue: 'groove'},
    {viewValue: 'ridge'},
    {viewValue: 'inset'},
    {viewValue: 'outset'}];
  borderRadius: number;
  borderRadiusUnit = 'px';
  borderRadiusUnits: any = [
    {viewValue: '%'},
    {viewValue: 'px'},
    {viewValue: 'rem'}
  ];
  background = 'rgba(0,0,0,1)';
  backgroundGradient: boolean;
  backgroundStartColor: string;
  backgroundEndColor: string;
  gradientTo = 'left';
  gradientToList: any = [
    {viewValue: 'left'},
    {viewValue: 'right'},
    {viewValue: 'top'},
    {viewValue: 'bottom'}
  ];
  boxShadow: string;
  boxShadowTrue: boolean;
  boxShadowInset: boolean;
  boxShadowX: number;
  boxShadowY: number;
  boxShadowBlur: number;
  boxShadowSpread: number;
  boxShadowColor: string;

  textValue = 'CSS';
  color: string;
  fontFamily = 'sans-serif';
  fontFamilys: any = [
    {viewValue: '"Times New Roman"'},
    {viewValue: '"Arial"'},
    {viewValue: '"Impact"'},
    {viewValue: '"Verdana"'},
    {viewValue: 'sans-serif'},
    {viewValue: 'serif'}
  ];
  fontSize: string;
  fontWeight: string;
  fontWeights: any = [
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
  ];
  textShadow: string;
  textShadowTrue: boolean;
  textShadowX: number;
  textShadowY: number;
  textShadowBlur: number;
  textShadowColor: string;
  class = 'myClass';
  constructor() {
  }
}
