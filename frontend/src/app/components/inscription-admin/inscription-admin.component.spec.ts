import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAdminComponent } from './inscription-admin.component';

describe('InscriptionAdminComponent', () => {
  let component: InscriptionAdminComponent;
  let fixture: ComponentFixture<InscriptionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
