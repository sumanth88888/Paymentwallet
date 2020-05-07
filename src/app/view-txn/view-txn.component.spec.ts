import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTxnComponent } from './view-txn.component';

describe('ViewTxnComponent', () => {
  let component: ViewTxnComponent;
  let fixture: ComponentFixture<ViewTxnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTxnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
