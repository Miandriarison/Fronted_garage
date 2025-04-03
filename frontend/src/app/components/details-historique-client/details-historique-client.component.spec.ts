import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHistoriqueClientComponent } from './details-historique-client.component';

describe('DetailsHistoriqueClientComponent', () => {
  let component: DetailsHistoriqueClientComponent;
  let fixture: ComponentFixture<DetailsHistoriqueClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsHistoriqueClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsHistoriqueClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
