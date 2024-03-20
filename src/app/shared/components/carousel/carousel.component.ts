import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

  filmexExibidos: any[] = []

  filmes: any[] = [
    {nome: 'Solo', img: 'https://image.tmdb.org/t/p/original/gaOb9hyCDUcbZiTYcHy7mIFmNo.jpg'},
    {nome: 'Solo', img: 'https://image.tmdb.org/t/p/original/ulUmkLFtT1Y0YGtmO6lBkMwLsBR.jpg'},
    {nome: 'Solo', img: 'https://image.tmdb.org/t/p/original/AbkZUxkVZU8XhoRGkknu6cZUark.jpg'},
    {nome: 'Solo', img: 'https://image.tmdb.org/t/p/original/hZmAP0DNEsu5dlLTCARn5c7mRaA.jpg'},
    {nome: 'Solo', img: 'https://image.tmdb.org/t/p/original/dpd9aUIUT0tUDIard91nTWLLETV.jpg'},
    {nome: 'Solo', img: 'https://image.tmdb.org/t/p/original/gTlebLaA1zTVbZZdGEoxhjIWgew.jpg'},
    {nome: 'Solo', img: 'https://image.tmdb.org/t/p/original/jDzRWCbsndnAhpB70L1jhjzw1NV.jpg'},
    {nome: 'Solo', img: 'https://image.tmdb.org/t/p/original/aANgCyN1bRtOp3gvyYuU5kQFp3q.jpg'},
    {nome: 'Solo', img: 'https://image.tmdb.org/t/p/original/1WivXX7DTXjUhlC465tgnkMC0aN.jpg'},
    {nome: 'Solo', img: 'https://image.tmdb.org/t/p/original/nzSJcUFe9a6lF6nxAyqP2cGgYjt.jpg'},
  ];

  totalFilmes:number = 8;
  paginaAtual:number = 0;

  ngOnInit(): void {
    this.filmexExibidos = this.filmes.slice(0,this.totalFilmes)
  }

  public nextFilmes(): void {
    this.totalFilmes ++
    this.paginaAtual ++
    this.atualizarFilmes()
  }

  public returnFilmes(): void {
    this.totalFilmes --;
    this.paginaAtual --;
    this.atualizarFilmes()
  }

  private atualizarFilmes(): void {
    this.filmexExibidos = this.filmes.slice(this.paginaAtual, this.totalFilmes)
  }


}
