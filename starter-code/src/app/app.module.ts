import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyMovieComponent } from './components/my-movie/my-movie.component';
import {routes} from './routes';
import {RouterModule} from '../../node_modules/@angular/router';
import { MovieService } from 'services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
