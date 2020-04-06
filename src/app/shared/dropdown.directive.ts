import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toogleButtonClicked() {
    this.isOpen = !this.isOpen;
    //this.render.addClass(this.element.nativeElement, 'open');
  }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    /*  this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false; */
    if (this.elRef.nativeElement.contains(event.target)) {
      //alert('clicked inside');
    } else {
      //alert('clicked outside');
      this.isOpen = false;
    }
  }
  constructor(private elRef: ElementRef) {}
}
