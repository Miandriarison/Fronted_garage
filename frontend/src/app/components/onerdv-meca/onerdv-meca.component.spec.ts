import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnerdvMecaComponent } from './onerdv-meca.component';

describe('OnerdvMecaComponent', () => {
  let component: OnerdvMecaComponent;
  let fixture: ComponentFixture<OnerdvMecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnerdvMecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnerdvMecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
