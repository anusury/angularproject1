import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertpageComponent } from './desertpage.component';

describe('DesertpageComponent', () => {
  let component: DesertpageComponent;
  let fixture: ComponentFixture<DesertpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesertpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
