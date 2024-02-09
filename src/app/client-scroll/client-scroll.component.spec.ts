import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientScrollComponent } from './client-scroll.component';

describe('ClientScrollComponent', () => {
  let component: ClientScrollComponent;
  let fixture: ComponentFixture<ClientScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
