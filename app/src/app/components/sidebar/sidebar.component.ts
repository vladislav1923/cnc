import { Component } from '@angular/core';
import { SIDEBAR_LINKS } from "../../contants/sidebar-links";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public links = SIDEBAR_LINKS;
}
