import { Component } from '@angular/core';
import { MdList } from '@angular2-material/list/';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MdList, MdToolbar, MdButton]
})
export class AppComponent {
  title = 'app works!';
}
