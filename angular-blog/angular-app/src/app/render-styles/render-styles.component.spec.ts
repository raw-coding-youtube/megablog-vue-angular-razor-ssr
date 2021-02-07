import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderStylesComponent } from './render-styles.component';

describe('RenderStylesComponent', () => {
  let component: RenderStylesComponent;
  let fixture: ComponentFixture<RenderStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
