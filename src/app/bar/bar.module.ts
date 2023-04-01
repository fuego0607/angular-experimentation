import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar.component';
import { THING } from '../tokens';

const routes: Routes = [
  {
    path: '',
    component: BarComponent,
    providers: [
      { provide: THING, useValue: 'THIS IS BAR' }
    ]
  }
];

@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BarModule { }
