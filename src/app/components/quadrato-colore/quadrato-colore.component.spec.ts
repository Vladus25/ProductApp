import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadratoColoreComponent } from './quadrato-colore.component';

describe('QuadratoColoreComponent', () => {
  let component: QuadratoColoreComponent;
  let fixture: ComponentFixture<QuadratoColoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadratoColoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadratoColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
