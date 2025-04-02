import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceAdminComponent } from './piece-admin.component';

describe('PieceAdminComponent', () => {
  let component: PieceAdminComponent;
  let fixture: ComponentFixture<PieceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieceAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
