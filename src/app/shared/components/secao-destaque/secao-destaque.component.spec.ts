import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoDestaqueComponent } from './secao-destaque.component';

describe('SecaoDestaqueComponent', () => {
  let component: SecaoDestaqueComponent;
  let fixture: ComponentFixture<SecaoDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoDestaqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecaoDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
