import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { CityInformationComponent } from './city-information.component';

describe('CityInformationComponent', () => {
  let component: CityInformationComponent;
  let fixture: ComponentFixture<CityInformationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CityInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
