import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GITHUB_REPO_URL } from "../../constants";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public repoUrl = GITHUB_REPO_URL;
}
