import { Component } from '@angular/core';
import { MdList } from '@angular2-material/list/';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MdSlideToggle } from '@angular2-material/slide-toggle';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MdList, MdToolbar, MdButton, MdSlideToggle]
})
export class AppComponent {
  title = 'DWX app works!';
}
