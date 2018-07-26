import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  id: number;
  m:any;

  constructor(public route: ActivatedRoute, public ms: MovieService) {
    this.route.params.subscribe((params) => {
      this.id = Number(params.id);
    });
  }

  ngOnInit() {
    this.m = this.ms.getMovie(this.id);
  }

}
