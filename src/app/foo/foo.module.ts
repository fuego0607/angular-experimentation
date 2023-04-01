import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './foo.component';
import { MODULE_PROVIDED_ITEM, THING } from '../tokens';

const routes: Routes = [
  {
    path: '',
    component: FooComponent,
    providers: [
      { provide: THING, useValue: 'THIS IS FOO' }
    ]
  }
];

@NgModule({
  declarations: [FooComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: MODULE_PROVIDED_ITEM, useValue: FooComponent }
  ]
})
export class FooModule { }
