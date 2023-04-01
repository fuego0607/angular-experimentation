import { Component, Inject } from '@angular/core';
import { THING } from '../tokens';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  constructor(
    @Inject(THING) public THING: string
  ) {}

}
