import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppEffects } from './app.effects';
import { CurrencyService } from "../../services/currency.service";
import { HttpClientModule } from "@angular/common/http";
import { MockProviders } from "ng-mocks";

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        MockProviders(CurrencyService),
        provideMockActions(() => actions$),
      ],
      imports: [ HttpClientModule ],
    });

    effects = TestBed.inject(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
