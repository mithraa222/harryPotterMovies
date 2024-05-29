import { MovieDetail } from "./MovieDetail";
import { MoviesInfo } from "./MoviesInfo";

export interface MovieRecords{
    screen1:Array<MoviesInfo>;
    screen2:{[key: string] : MovieDetail}
}