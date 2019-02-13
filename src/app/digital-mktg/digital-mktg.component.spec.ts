import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMktgComponent } from './digital-mktg.component';

describe('DigitalMktgComponent', () => {
  let component: DigitalMktgComponent;
  let fixture: ComponentFixture<DigitalMktgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalMktgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMktgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
