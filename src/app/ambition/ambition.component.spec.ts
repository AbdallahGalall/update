import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitionComponent } from './ambition.component';

describe('AmbitionComponent', () => {
  let component: AmbitionComponent;
  let fixture: ComponentFixture<AmbitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
