import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listaFilmes: any[] = [
    {nome: 'Oppehaime', url:'https://image.tmdb.org/t/p/original/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg'},
    {nome: 'Wonka', url:'https://image.tmdb.org/t/p/original/bRaeUi5jS7je6KEpfL03bkT7xxP.jpg'},
    {nome: 'Napoleão', url:'https://image.tmdb.org/t/p/original/9KlsiGx0XQ9zOrRGTQwvXhNllcp.jpg'},
    {nome: 'Oppehaime', url:'https://image.tmdb.org/t/p/original/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg'},
    {nome: 'Wonka', url:'https://image.tmdb.org/t/p/original/bRaeUi5jS7je6KEpfL03bkT7xxP.jpg'},
    {nome: 'Napoleão', url:'https://image.tmdb.org/t/p/original/9KlsiGx0XQ9zOrRGTQwvXhNllcp.jpg'},
    {nome: 'Oppehaime', url:'https://image.tmdb.org/t/p/original/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg'},
    {nome: 'Wonka', url:'https://image.tmdb.org/t/p/original/bRaeUi5jS7je6KEpfL03bkT7xxP.jpg'},
    {nome: 'Napoleão', url:'https://image.tmdb.org/t/p/original/9KlsiGx0XQ9zOrRGTQwvXhNllcp.jpg'},
    {nome: 'Oppehaime', url:'https://image.tmdb.org/t/p/original/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg'},
    {nome: 'Wonka', url:'https://image.tmdb.org/t/p/original/bRaeUi5jS7je6KEpfL03bkT7xxP.jpg'},
    {nome: 'Napoleão', url:'https://image.tmdb.org/t/p/original/9KlsiGx0XQ9zOrRGTQwvXhNllcp.jpg'},
  ]
}
