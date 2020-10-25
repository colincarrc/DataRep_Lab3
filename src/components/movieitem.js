import React from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {

    render() {
        return (
            <div >


                <Card>
                    <Card.Header>{this.props.movies.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movies.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movies.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}