import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secao-destaque',
  standalone: false,
  templateUrl: './secao-destaque.component.html',
  styleUrl: './secao-destaque.component.scss'
})
export class SecaoDestaqueComponent {
  @Input() titulo: string = ''
}
