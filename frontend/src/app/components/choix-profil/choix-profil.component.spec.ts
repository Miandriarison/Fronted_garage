import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixProfilComponent } from './choix-profil.component';

describe('ChoixProfilComponent', () => {
  let component: ChoixProfilComponent;
  let fixture: ComponentFixture<ChoixProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
