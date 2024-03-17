import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  
  @Input()
  photoCover:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string = "0"

  constructor(){}

  ngOnInit(): void {

  }
}
