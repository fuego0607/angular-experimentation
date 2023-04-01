import { Component, Inject } from '@angular/core';
import { THING } from '../../tokens';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  constructor(
    @Inject(THING) public THING: string
  ) {}

}
