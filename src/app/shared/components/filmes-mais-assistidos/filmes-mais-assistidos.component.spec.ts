import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesMaisAssistidosComponent } from './filmes-mais-assistidos.component';

describe('FilmesMaisAssistidosComponent', () => {
  let component: FilmesMaisAssistidosComponent;
  let fixture: ComponentFixture<FilmesMaisAssistidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmesMaisAssistidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmesMaisAssistidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
