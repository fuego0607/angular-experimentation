import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { THING } from '../tokens';
import { BarComponent } from './bar/bar.component';
import { FooComponent } from './foo/foo.component';

const routes: Routes = [
  {
    path: 'foo',
    component: FooComponent,
    providers: [
      { provide: THING, useValue: 'Woohoo' }
    ]
  },
  {
    path: 'bar',
    component: BarComponent,
    providers: [
      { provide: THING, useValue: 'OMG' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
