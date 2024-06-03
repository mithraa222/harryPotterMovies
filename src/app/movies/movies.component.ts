import { HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../filter.pipe";
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesInfo } from '../_model/MoviesInfo';
import { MovieDetail } from '../_model/MovieDetail';

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [CommonModule, FormsModule, FilterPipe]
})
export class MoviesComponent implements OnInit{

  viewTable:boolean = false;
  info!:Array<MoviesInfo>;
  movieDetails!: MovieDetail;
  movieTitle:string ='';
  releaseDate:string='';
  // parameter:{ id: string; } | undefined;


  movieId: string | null | undefined;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:SharedServiceService){}

  handleDetails(currentMovieId:string) {
    console.log('event is ==', currentMovieId);
    this.router.navigate(['movies',currentMovieId]);
  }

  backEvent(){
    this.router.navigate(['movies']);
  }


  ngOnInit(){
      if(this.activatedRoute.snapshot.paramMap.get('movieId')){
        let movieId = this.activatedRoute.snapshot.paramMap.get('movieId') || "";
        this.viewTable = false;
        this.service.getAllDetails()
        .subscribe(data=>{
          this.movieDetails = data['screen2' as keyof {}][movieId];
        })
      }else{
        this.viewTable = true;
        this.service.getAllDetails()
        .subscribe(data=>{
          console.log("data ===",data);
          this.info = data['screen1' as keyof {}];
        })
      }
  }


}
