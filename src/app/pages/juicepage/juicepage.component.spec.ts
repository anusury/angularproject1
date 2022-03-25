import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuicepageComponent } from './juicepage.component';

describe('JuicepageComponent', () => {
  let component: JuicepageComponent;
  let fixture: ComponentFixture<JuicepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuicepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuicepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
