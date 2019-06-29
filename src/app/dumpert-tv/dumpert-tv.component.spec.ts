import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpertTVComponent } from './dumpert-tv.component';

describe('DumpertTVComponent', () => {
  let component: DumpertTVComponent;
  let fixture: ComponentFixture<DumpertTVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumpertTVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpertTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
