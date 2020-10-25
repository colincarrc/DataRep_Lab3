import React from 'react';
import {MovieItem} from './movieitem';

export class Movies extends React.Component {

  render() {
    return this.props.movies.map( (movies)=>{
        return <MovieItem movies={movies}></MovieItem>

    })
      
  }
}