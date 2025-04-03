import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Details2rdvComponent } from './details2rdv.component';

describe('Details2rdvComponent', () => {
  let component: Details2rdvComponent;
  let fixture: ComponentFixture<Details2rdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Details2rdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Details2rdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
