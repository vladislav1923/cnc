import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyComponent } from './currency.component';
import { TableComponent } from "../table/table.component";
import { AppFacade } from "../../+state/facade/app.facade";
import { MockComponents, MockProviders } from "ng-mocks";

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyComponent, MockComponents(TableComponent) ],
      providers: [ MockProviders(AppFacade) ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
