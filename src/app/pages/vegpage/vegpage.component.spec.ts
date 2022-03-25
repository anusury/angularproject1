import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegpageComponent } from './vegpage.component';

describe('VegpageComponent', () => {
  let component: VegpageComponent;
  let fixture: ComponentFixture<VegpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
