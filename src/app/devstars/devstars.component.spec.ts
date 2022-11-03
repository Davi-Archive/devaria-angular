import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevstarsComponent } from './devstars.component';

describe('DevstarsComponent', () => {
  let component: DevstarsComponent;
  let fixture: ComponentFixture<DevstarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevstarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevstarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
