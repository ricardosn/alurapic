import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter = '';
  debounce: Subject< string > = new Subject < string >();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /* data.photos é o valor que está sendo atribuido no arquivo de rotas pelo resolver criado */
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
