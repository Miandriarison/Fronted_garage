import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail1rdvComponent } from './detail1rdv.component';

describe('Detail1rdvComponent', () => {
  let component: Detail1rdvComponent;
  let fixture: ComponentFixture<Detail1rdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail1rdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail1rdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
