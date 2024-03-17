import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  
  @Input()
  photoCover:string = ""
  @Input()
  cardDescription:string = ""

  constructor(){}

  ngOnInit(): void {

  }
}
