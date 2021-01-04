import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerapiComponent } from './traerapi.component';

describe('TraerapiComponent', () => {
  let component: TraerapiComponent;
  let fixture: ComponentFixture<TraerapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraerapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
