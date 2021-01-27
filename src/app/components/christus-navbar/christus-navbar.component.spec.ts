import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristusNavbarComponent } from './christus-navbar.component';

describe('ChristusNavbarComponent', () => {
  let component: ChristusNavbarComponent;
  let fixture: ComponentFixture<ChristusNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristusNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristusNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
