import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTxnQueryComponent } from './view-txn-query.component';

describe('ViewTxnQueryComponent', () => {
  let component: ViewTxnQueryComponent;
  let fixture: ComponentFixture<ViewTxnQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTxnQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTxnQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
