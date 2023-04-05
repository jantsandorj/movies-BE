import {model,Schema,Types} from "mongoose"
interface IMovies {
    plot: string;
    genres: string[];
    runtime: number;
    cast: string[];
    num_mflix_comments: number;
    poster: string;
    title: string;
    fullplot: string;
    countries: string[];
    released: Date;
    directors: string[];
    writers: string[];
    awards: {
        wins: number;
        nominations: number;
        text: string;
    };
    lastupdated: Date;
    year: number;
    imdb: {
        rating: number;
        votes: number;
        id: number;
    };
    type: string;
    tomatoes: {
        viewer : {
            rating: number;
            numReviews: number;
            meter: number
        };
        fresh: number;
        critic: {
            rating: number;
            numReviews: number;
            meter: number;
        }
        rotten: number;
        lastUpdated: Date;
    }
}

const movieSchema = new Schema<IMovies>({}, {timestamps: true})

const Movie = model<IMovies>("movies", movieSchema)

export default Movie;