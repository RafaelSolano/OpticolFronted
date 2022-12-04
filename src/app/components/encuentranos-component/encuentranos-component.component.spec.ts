import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentranosComponentComponent } from './encuentranos-component.component';

describe('EncuentranosComponentComponent', () => {
  let component: EncuentranosComponentComponent;
  let fixture: ComponentFixture<EncuentranosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuentranosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuentranosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
