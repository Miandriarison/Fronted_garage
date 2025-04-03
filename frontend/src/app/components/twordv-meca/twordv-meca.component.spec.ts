import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwordvMecaComponent } from './twordv-meca.component';

describe('TwordvMecaComponent', () => {
  let component: TwordvMecaComponent;
  let fixture: ComponentFixture<TwordvMecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwordvMecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwordvMecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
