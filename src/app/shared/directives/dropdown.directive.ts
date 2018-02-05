import { Directive } from "@angular/core";
import { HostListener } from "@angular/core";
import { HostBinding } from "@angular/core";

@Directive({

    selector: '[appDropdown]'
})
export class DropdownDirective{

    @HostBinding('class.show') isOpen = false; 
    @HostListener('click') toogleOpen(){

        this.isOpen = !this.isOpen; 
    }
}