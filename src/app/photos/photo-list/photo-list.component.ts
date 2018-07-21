import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /* data.photos é o valor que está sendo atribuido no arquivo de rotas pelo resolver criado */
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

}
