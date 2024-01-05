import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MottoBottomComponent } from './motto-bottom.component';

describe('MottoBottomComponent', () => {
  let component: MottoBottomComponent;
  let fixture: ComponentFixture<MottoBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MottoBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MottoBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
