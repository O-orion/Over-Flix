import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFilmeComponent } from './pagina-filme.component';

describe('PaginaFilmeComponent', () => {
  let component: PaginaFilmeComponent;
  let fixture: ComponentFixture<PaginaFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaFilmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
