import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecaLoginComponent } from './meca-login.component';

describe('MecaLoginComponent', () => {
  let component: MecaLoginComponent;
  let fixture: ComponentFixture<MecaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecaLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
