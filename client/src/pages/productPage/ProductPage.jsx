import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addToBasket, deleteProduct, getBasket, removeFromBasket } from "../../http/productsAPI";
import deletedtn from '../../assets/delete.svg';
import editbtn from '../../assets/edit.png';
import { MAIN_ROUTE } from "../../utils/consts";
import UpdateProduct from "../../components/modals/upgateProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProductAction, setBaskets } from "../../redux/actions/products";

const ProductPage = () => {
    const dispatch = useDispatch();
    const productPage = useSelector(({ productsPage }) => productsPage);
    const { oneProduct } = productPage;
    const isAdmin = useSelector(({ usersPage }) => usersPage.isAdmin);

    const navigate = useNavigate();
    const { id } = useParams();

    const [productVisible, setProductVisible] = useState(false);
    const [inBasket, setInBasket] = useState(false)

    useEffect(() => {
        getBasket().then(data => {
            dispatch(setBaskets(data))

            data.map(product => {
                if (product.productId === Number(id)) {
                    setInBasket(true)
                }
            })
        })
        dispatch(fetchOneProductAction(id));

    }, [productVisible])


    const add = () => {
        addToBasket({
            productId: id,
            writerId: oneProduct.writerId,
            genreId: oneProduct.genreId
        }).then(data => {
            alert(`Товар ${oneProduct.title} был добавлен в вашу корзину!`)
            setInBasket(true)
        })
    }

    const removeBasketItem = () => {
        removeFromBasket(id).then(data => {
            alert(`Товар ${oneProduct.title} был удалён из корзины!`)
            setInBasket(false)
        })
    }

    const removeProduct = () => {
        deleteProduct(oneProduct.id).then(data => {
            navigate(MAIN_ROUTE)
        })
    }

    return (

        <div className="component productPage">
            <div className="container">
                {oneProduct ?
                    <>
                        <div className="productPage__inner">
                            <div className="productNamePage">
                                {oneProduct.title}
                            </div>
                            {!!isAdmin &&
                                <div>
                                    <img
                                        src={editbtn}
                                        onClick={() => setProductVisible(true)}
                                        title="Редактировать товар" />
                                    <img
                                        src={deletedtn}
                                        onClick={removeProduct}
                                        title="Удалить товар" />

                                </div>
                            }

                        </div>

                        <div className="flex">

                            <div className="flex_left">
                                <img
                                    className="product_Image"
                                    src={process.env.REACT_APP_API_URL + oneProduct.image} />
                                <div className="desciption">
                                    Описание:
                                    <div className="desciption_inner">
                                        {oneProduct.productDescription}
                                    </div>
                                </div>
                            </div>

                            <div className="product_Info">

                                {inBasket
                                    ?
                                    <>
                                        <div className="Basket_desc">
                                            Товар в корзине
                                        </div>
                                        <div className="Basket"
                                            onClick={removeBasketItem}>
                                            Удалить из корзины
                                        </div>
                                    </>


                                    :
                                    <div className="Basket"
                                        onClick={add}>
                                        Добавить в корзину
                                    </div>
                                }

                                <div className="product_price">
                                    {oneProduct.price} BYN/Шт
                                </div>
                                {oneProduct.writer &&
                                    <div className="product_Info_Inner">
                                        Автор: {oneProduct.writer.name}
                                    </div>}

                                {oneProduct.genre &&
                                    <div className="product_Info_Inner">
                                        Жанр: {oneProduct.genre.name}
                                    </div>}
                                <div className="product_Info_Inner">
                                    Год издания: {oneProduct.productionYear}
                                </div>
                                <div className="product_Info_Inner">
                                    Количество страниц: {oneProduct.pageCount}
                                </div>
                                <div className="product_Info_Inner">
                                    Издательство: {oneProduct.edition}
                                </div>


                            </div>
                        </div>
                    </>
                    :
                    <div>Loading...</div>

                }

            </div>

            <UpdateProduct
                show={productVisible}
                products={productPage}
                onHide={() => setProductVisible(false)} />
        </div>
    )
}

export default ProductPage