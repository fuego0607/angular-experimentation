import { createNgModule, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MODULE_PROVIDED_ITEM } from './tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  @ViewChild('placeholder', { read: ViewContainerRef }) placeholder!: ViewContainerRef;

  async createFoo() {
    this.placeholder.clear();
    await import('./foo/foo.module').then((m) => {
      const module = createNgModule(m.FooModule);
      const component = module.injector.get(MODULE_PROVIDED_ITEM);
      this.placeholder.createComponent(component);
    }).catch(console.error);
  }

  async createBar() {
    this.placeholder.clear();
    await import('./bar/bar.module').then((m) => {
      const module = createNgModule(m.BarModule);
      const component = module.injector.get(MODULE_PROVIDED_ITEM);
      this.placeholder.createComponent(component);
    }).catch(console.error);
  }
}
