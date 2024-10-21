import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoancemaComponent } from './joancema.component';

describe('JoancemaComponent', () => {
  let component: JoancemaComponent;
  let fixture: ComponentFixture<JoancemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoancemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoancemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
