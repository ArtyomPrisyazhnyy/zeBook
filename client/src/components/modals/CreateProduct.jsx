import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from '../../http/productsAPI'
import { fetchByCategory, setSelectedGenre, setSelectedWriter } from "../../redux/actions/products";

const CreateProduct = ({ onHide, show }) => {
    const dispatch = useDispatch();
    const products = useSelector(({ productsPage }) => productsPage);

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState(null)
    const [edition, setEdition] = useState('')
    const [productYear, setProductYear] = useState('')
    const [pageCount, setPageCount] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        dispatch(fetchByCategory());
    }, [])

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addProduct = () => {
        const formData = new FormData();
        try {
            formData.append('title', name)
            formData.append('price', Number(price))
            formData.append('image', file)
            formData.append('genreId', products.selectedGenre.id)
            formData.append('writerId', products.selectedWriter.id)
            formData.append('productionYear', Number(productYear))
            formData.append('pageCount', Number(pageCount))
            formData.append('edition', edition)
            formData.append('productDescription', description)

            createProduct(formData).then(data => {
                setName('')
                setPrice('')
                setFile(null)
                setEdition('')
                setProductYear('')
                setPageCount('')
                setDescription('')
                dispatch(setSelectedGenre(null))
                dispatch(setSelectedWriter(null))
                onHide(false)
            })
        } catch (e) {
            alert("Неудалось добавить товар")
        }
    }

    return (
        <>
            {show &&
                <div className="modal">
                    <div className="modal__content">
                        <div className="modal__title">Добавить товар</div>
                        <form action="/" method="post">

                            <div className="drop">
                                <div className="drop_name">
                                    Автор: {products.selectedWriter.name}
                                </div>
                                <div className="dropdown">

                                    <div className="listTitle">Выбрать автора</div>
                                    <div className="dropdown_content">
                                        {products.writer.map(writer =>
                                            <div className="dropdown_item"
                                                onClick={() => dispatch(setSelectedWriter(writer))}
                                                key={writer.id}
                                            >
                                                {writer.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="drop">
                                <div className="drop_name">
                                    Жанр: {products.selectedGenre.name}
                                </div>
                                <div className="dropdown">

                                    <div className="listTitle">Выбрать жанр</div>
                                    <div className="dropdown_content">
                                        {products.genre.map(genre =>
                                            <div className="dropdown_item"
                                                onClick={() => dispatch(setSelectedGenre(genre))}
                                                key={genre.id}
                                            >
                                                {genre.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">Название товара:</div>
                                <input
                                    className="form__control"
                                    type="text"
                                    placeholder="Введите название товара"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                ></input>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">Стоимость товара:</div>
                                <input
                                    className="form__control"
                                    type="text"
                                    placeholder="Введите стоимость товара"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                ></input>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">Издательство:</div>
                                <input
                                    className="form__control"
                                    type="text"
                                    placeholder="Введите издательство"
                                    value={edition}
                                    onChange={e => setEdition(e.target.value)}
                                ></input>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">Год выпуска:</div>
                                <input
                                    className="form__control"
                                    type="text"
                                    placeholder="Введите год выпуска товара"
                                    value={productYear}
                                    onChange={e => setProductYear(e.target.value)}
                                ></input>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">Количество страниц:</div>
                                <input
                                    className="form__control"
                                    type="text"
                                    placeholder="Введите количество страниц"
                                    value={pageCount}
                                    onChange={e => setPageCount(e.target.value)}
                                ></input>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">Описание товара:</div>
                                <textarea
                                    className="form__textarea"
                                    type="text"
                                    placeholder="Введите описание товара"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                ></textarea>
                            </div>


                            <div className="addIMG">Выберите изображение:</div>
                            <input
                                type="file"
                                onChange={selectFile}
                            ></input>
                        </form>

                        <div className="modal__buttons">
                            <div className="modal__btn modal__add"
                                onClick={() => onHide(false)}>
                                закрыть
                            </div>
                            <div
                                className="modal__btn modal__close"
                                onClick={addProduct}>добавить</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CreateProduct;