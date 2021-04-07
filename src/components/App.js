import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';


class App extends React.Component {
    state= {
        movies: [
            {
                "id": 1,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "This is wider card with bla bla This is wider card with bla bla This is wider card with bla bla This is wider card with bla bla", 
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            }, 
            {
                "id": 2,
                "name": "Batman",
                "rating": 8.4,
                "overview": "This is wider card with bla bla This is wider card with bla bla This is wider card with bla bla This is wider card with bla bla", 
                "imageURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/k8Q9ulyRE8fkvZMkAM9LPYMKctb.jpg"
            },
            {
                "id": 3,
                "name": "Deadwood",
                "rating": 9,
                "overview": "Follow the 10-year reunion of the Deadwood camp to celebrate South Dakota's statehood. Former rivalries are reignited, alliances are tested and old wounds are reopened, as all are left to navigate the inevitable changes that modernity and time have wrought.", 
                "imageURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fCQ13cqd02dop7Chkov0fPl4r3t.jpg"
            },

            {
                "id": 4,
                "name": "Rogue",
                "rating": 7.4,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
            },

            {
                "id": 5,
                "name": "Project Power",
                "rating": 6.7,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg"
            },

            {
                "id": 6,
                "name": "Superman",
                "rating": 7.6,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
            }

        ]
    }

    deleteMovie = (movie) => {
        const newMoviesList = this.state.movies.filter(
            m => m.id !== movie.id
        );

      /*  this.setState ({
            movies: newMoviesList
        })

*/

        this.setState(state=> ({
            movies:newMoviesList
        }))

    }

    render(){
        return (
           <div className="container">
               <div className="row">
                   <div className="col-lg-12">
                       <SearchBar />
                   </div>
               </div>
               <MovieList 
               movies={this.state.movies}
               deleteMovieProp={this.deleteMovie}
               />
           </div>
        )
    }
}


export default App;