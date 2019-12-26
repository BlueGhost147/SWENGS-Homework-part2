import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockleveldialogComponent } from './stockleveldialog.component';

describe('StockleveldialogComponent', () => {
  let component: StockleveldialogComponent;
  let fixture: ComponentFixture<StockleveldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockleveldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockleveldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
