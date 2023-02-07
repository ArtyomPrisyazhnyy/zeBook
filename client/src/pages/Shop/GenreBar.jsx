import React from 'react';

const GenreBar = ({ selectedGenreId, onSetSelectedGenre, genre }) => {

    return (
        <ul className="genreBar nonselect">

            {genre.map(genre =>
                <li
                    key={genre.id}
                    data-active={genre.id === selectedGenreId}
                    className="genre_item"
                    onClick={() => onSetSelectedGenre(genre)} >
                    {genre.name}
                </li>
            )}

        </ul>
    )
}

export default GenreBar