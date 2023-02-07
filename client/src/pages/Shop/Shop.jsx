import React, { useCallback, useEffect } from 'react';
import GenreBar from './GenreBar';
import ProductsList from './ProductsList';
import WriterBar from './WriterBar';
import Pagination from '../../components/pagination/pagination'
import { useDispatch, useSelector } from 'react-redux';
import { fetchByCategory, fetchProductsAction, setSelectedGenre, setSelectedWriter } from '../../redux/actions/products';

const Shop = () => {
    const dispatch = useDispatch();
    const {
        genre,
        writer,
        products,
        selectedWriter,
        selectedGenre,
        page,
        limit,
        searchingProduct,
        totalCount
    } = useSelector(({ productsPage }) => productsPage);

    useEffect(() => {
        dispatch(fetchByCategory());
    }, [])

    useEffect(() => {
        dispatch(fetchProductsAction(selectedWriter.id, selectedGenre.id, page, limit, searchingProduct))
    }, [page, selectedGenre, selectedWriter]);

    const onSetSelectedGenre = genre => {
        genre.id === selectedGenre.id
            ?
            dispatch(setSelectedGenre({}))
            :
            dispatch(setSelectedGenre(genre))
    }

    const onSetSelectedWriter = writer => {
        writer.id === selectedWriter.id
            ?
            dispatch(setSelectedWriter({}))
            :
            dispatch(setSelectedWriter(writer))
    }

    return (
        <div className="shop component">

            <WriterBar
                writer={writer}
                selectedWriterId={selectedWriter.id}
                onSetSelectedWriter={onSetSelectedWriter}
            />

            <div className="container">
                <GenreBar
                    genre={genre}
                    selectedGenreId={selectedGenre.id}
                    onSetSelectedGenre={onSetSelectedGenre}
                />

                <div className="Products">
                    <ProductsList productsPage={products} />
                </div>

                {products.length === 0 &&
                    <div>Упс, походу ничего не найдено</div>
                }
                <Pagination
                    totalCount={totalCount}
                    limit={limit}
                    selectedPage={page}
                />
            </div>
        </div>
    )
}

export default Shop;
