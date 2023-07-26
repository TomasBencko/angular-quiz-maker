import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appScoreColor]',
  standalone: true
})
export class ScoreColorDirective implements OnChanges {

  @Input() appScoreColor: number | null = null;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    const successRate = changes['appScoreColor']?.currentValue;
    if (typeof successRate !== 'number') return;

    if (successRate >= .8) {
      this.el.nativeElement.style.backgroundColor = 'green';
      this.el.nativeElement.style.color = 'white';

    } else if (successRate >= .4) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
      this.el.nativeElement.style.color = 'black';

    } else {
      this.el.nativeElement.style.backgroundColor = 'red';
      this.el.nativeElement.style.color = 'white';
    }
  }
}
