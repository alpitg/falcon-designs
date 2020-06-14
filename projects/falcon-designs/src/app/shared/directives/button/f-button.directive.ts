import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[f-button]'
})
export class FButtonDirective {

  @Input('color') color: string;

  domElement: any;
  fontColor = '';
  bgcolor = '';

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.domElement = this.elementRef.nativeElement;

    this.fontColor = this.color === 'primary' ? '#fff' : '#000000';
    this.bgcolor = this.color === 'primary' ? '#03396c' : '#b3cde0';

    this.generateStyle();
  }

  generateStyle() {
    let newStyles = {
      'cursor': 'pointer',
      'border': 'none',
      'text-align': 'center',
      'vertical-align': 'middle',
      'padding': '.275rem .75rem',
      'border-radius': '.25rem',
      'font-weight': 'lighter',
    };

    if (!this.domElement.disabled) {
      const style = {
        'color': this.fontColor,
        'border-color': this.bgcolor,
        'background-color': this.bgcolor
      };
      newStyles = { ...newStyles, ...style };
    } else {
      const style = {
        'color': '#777',
        'border-color': '#e6e6e6',
        'background-color': '#e6e6e6',
        'disabled': this.domElement.disabled,
        // 'opacity': '.4',
        'cursor': 'not-allowed'
      };
      newStyles = { ...newStyles, ...style };
    }

    this.setTheStyle(newStyles);
  }

  setTheStyle(newStyles) {
    // Apply style
    Object.keys(newStyles).forEach(element => {
      this.domElement.style.setProperty(`${element}`, newStyles[element]);
    });
  }


  //#region hover effect
  @HostListener('mouseenter') onMouseEneter() {
    this.hightlight('#011f4b');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.hightlight(null);
  }

  private hightlight(color: string) {
    this.domElement.style.backgroundColor = color ? color : this.bgcolor;
  }
  //#endregion

}
