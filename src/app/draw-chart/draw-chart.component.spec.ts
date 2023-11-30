import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawChartComponent } from './draw-chart.component';

describe('DrawChartComponent', () => {
  let component: DrawChartComponent;
  let fixture: ComponentFixture<DrawChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawChartComponent]
    });
    fixture = TestBed.createComponent(DrawChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
