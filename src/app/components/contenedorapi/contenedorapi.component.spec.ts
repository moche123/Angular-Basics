import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorapiComponent } from './contenedorapi.component';

describe('ContenedorapiComponent', () => {
  let component: ContenedorapiComponent;
  let fixture: ComponentFixture<ContenedorapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
