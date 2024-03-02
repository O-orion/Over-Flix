import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
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
