import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneProduct, fetchWriters, updateProduct } from "../../http/productsAPI";

const UpdateProduct = (props) => {
    const dispatch = useDispatch();
    const onHide = props.onHide
    const show = props.show;
    const productsPage = useSelector(({ productsPage }) => productsPage)

    const [product, setProduct] = useState({ info: [] })
    const { id } = useParams();

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])


    const [name, setName] = useState(product.title)
    const [writer, setWriters] = useState(product.writer);
    const [genre, setGenres] = useState(product.genre);
    const [price, setPrice] = useState(product.price)
    const [file, setFile] = useState(null)
    const [edition, setEdition] = useState(product.edition)
    const [productYear, setProductYear] = useState(product.productionYear)
    const [pageCount, setPageCount] = useState(product.pageCount)
    const [description, setDescription] = useState(product.productDescription)


    useEffect(() => {
        setName(product.title);
        setWriters(product.writer);
        setGenres(product.genre)
        setPrice(product.price);
        setEdition(product.edition);
        setProductYear(product.productionYear);
        setPageCount(product.pageCount);
        setDescription(product.productDescription);
        fetchOneProduct(id).then(data => setProduct(data))
    }, [show])

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const editProduct = () => {
        const formData = new FormData();
        try {
            formData.append('title', name)
            formData.append('price', Number(price))
            formData.append('image', file)
            formData.append('genreId', Number(genre.id))
            formData.append('writerId', Number(writer.id))
            formData.append('productionYear', Number(productYear))
            formData.append('pageCount', Number(pageCount))
            formData.append('edition', edition)
            formData.append('productDescription', description)

            updateProduct(product.id, formData).then(data => {

                onHide(false)
            })
        } catch (e) {
            alert("Неудалось добавить товар")
        }
    }


    return (
        <>
            {show
                ?
                <div className="modal">
                    <div className="modal__content">
                        <div className="modal__title">Добавить товар</div>
                        <form action="/" method="post">

                            <div className="drop">
                                <div className="drop_name">
                                    Автор: {writer && writer.name}
                                </div>
                                <div className="dropdown">

                                    <div className="listTitle">
                                        Выбрать автора
                                    </div>
                                    <div className="dropdown_content">
                                        {productsPage.writer.map(writers =>
                                            <div
                                                className="dropdown_item"
                                                onClick={() => setWriters(writers)}
                                                key={writers.id}
                                            >
                                                {writers.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="drop">
                                <div className="drop_name">
                                    Жанр: {genre && genre.name}
                                </div>
                                <div className="dropdown">

                                    <div className="listTitle">
                                        Выбрать жанр
                                    </div>
                                    <div className="dropdown_content">
                                        {productsPage.genre.map(genres =>
                                            <div
                                                className="dropdown_item"
                                                onClick={() => setGenres(genres)}
                                                key={genres.id}>
                                                {genres.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">
                                    Название товара:
                                </div>
                                <input
                                    className="form__control"
                                    type="text"
                                    placeholder="Введите название товара"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                ></input>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">
                                    Стоимость товара:
                                </div>
                                <input
                                    className="form__control"
                                    type="text"
                                    placeholder="Введите стоимость товара"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                ></input>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">
                                    Издательство:
                                </div>
                                <input
                                    className="form__control"
                                    type="text"
                                    placeholder="Введите издательство"
                                    value={edition}
                                    onChange={e => setEdition(e.target.value)}
                                ></input>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">
                                    Год выпуска:
                                </div>
                                <input
                                    className="form__control"
                                    type="text"
                                    placeholder="Введите год выпуска товара"
                                    value={productYear}
                                    onChange={e => setProductYear(e.target.value)}
                                ></input>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">
                                    Количество страниц:
                                </div>
                                <input
                                    className="form__control"
                                    type="text"
                                    placeholder="Введите количество страниц"
                                    value={pageCount}
                                    onChange={e => setPageCount(e.target.value)}
                                ></input>
                            </div>

                            <div className="form__inner">
                                <div className="form_title">
                                    Описание товара:
                                </div>
                                <textarea
                                    className="form__textarea"
                                    type="text"
                                    placeholder="Введите описание товара"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                ></textarea>
                            </div>


                            <div className="addIMG">
                                Выберите изображение:
                            </div>
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
                                onClick={editProduct}>Сохранить изменения</div>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}

export default UpdateProduct;