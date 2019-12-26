import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocklevellistComponent } from './stocklevellist.component';

describe('StocklevellistComponent', () => {
  let component: StocklevellistComponent;
  let fixture: ComponentFixture<StocklevellistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocklevellistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocklevellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
