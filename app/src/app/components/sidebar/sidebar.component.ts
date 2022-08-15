import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppFacade } from "../../+state/facade/app.facade";
import { Observable } from "rxjs";
import { SceneEnum } from "../../enums";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public scene$: Observable<SceneEnum> = this.appFacade.scene$;
  public readonly scene = SceneEnum;

  constructor(private appFacade: AppFacade) {}

  public onUpdate(): void {
    this.appFacade.updateCurrencies();
  }
}
