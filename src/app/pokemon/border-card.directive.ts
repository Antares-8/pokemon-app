import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[pkmnBorderCard]',
})

export class BorderCardDirective {

    constructor(private el: ElementRef) {
        this.setBorder("#F5F5F5");
        this.setHeight(180);
    }

    // Pour capter l'entrée de la souris
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || '#FFFF00');
    }

    // Pour capter la sortie de la souris
    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#F5F5F5');
    }

    @Input('pkmnBorderCard') borderColor: string;


    private setBorder(color: string) {
        let border = 'solid 4px ' + color; 
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }

}