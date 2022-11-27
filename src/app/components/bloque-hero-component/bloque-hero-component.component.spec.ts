import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueHeroComponentComponent } from './bloque-hero-component.component';

describe('BloqueHeroComponentComponent', () => {
  let component: BloqueHeroComponentComponent;
  let fixture: ComponentFixture<BloqueHeroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueHeroComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueHeroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
