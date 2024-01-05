import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MottoTopComponent } from './motto-top.component';

describe('MottoTopComponent', () => {
  let component: MottoTopComponent;
  let fixture: ComponentFixture<MottoTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MottoTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MottoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
