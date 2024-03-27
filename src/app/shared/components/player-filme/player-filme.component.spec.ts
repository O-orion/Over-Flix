import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFilmeComponent } from './player-filme.component';

describe('PlayerFilmeComponent', () => {
  let component: PlayerFilmeComponent;
  let fixture: ComponentFixture<PlayerFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerFilmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
