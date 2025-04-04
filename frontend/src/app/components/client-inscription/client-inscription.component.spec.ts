import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInscriptionComponent } from './client-inscription.component';

describe('ClientInscriptionComponent', () => {
  let component: ClientInscriptionComponent;
  let fixture: ComponentFixture<ClientInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientInscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
