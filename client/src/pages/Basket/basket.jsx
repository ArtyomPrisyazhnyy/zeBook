import React, { useEffect } from "react";
import { cleanBasket, getBasket, removeFromBasket } from "../../http/productsAPI";
import { useNavigate } from "react-router-dom";
import { PRODUCTS_ROUTE } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";

const Basket = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productsPage = useSelector(({ productsPage }) => productsPage);
    const setBaskets = props.setBaskets;

    useEffect(() => {
        getBasket().then(data => {
            setBaskets(data)
        })
    }, [])

    let prices = 0;
    {
        productsPage.baskets.map(price =>

            prices = parseFloat((prices + price.product.price).toFixed(10))
        )
    }

    const cleanAllBasket = () => {
        cleanBasket().then(() => {
            setBaskets([])
        })
    }

    const removeBasketItem = (id) => {
        removeFromBasket(id).then(() => {
            getBasket().then(data => {
                setBaskets(data)
            })
        })
    }

    return (
        <div className="basketPage">
            <div className="container">
                <div className="basket_title">Корзина</div>

                <div className="total_basket" >
                    <div className="total_price">
                        <span>Итого: </span>{prices} BYN
                    </div>
                    <div className="clean_basket"
                        onClick={cleanAllBasket}>
                        Очистить корзину
                    </div>
                </div>

                <div className="basket_list">
                    {productsPage.baskets.map(basketItem =>
                        <div key={basketItem.id} className="basket_li">
                            <div
                                className="basket_item"
                                onClick={() => navigate(PRODUCTS_ROUTE + '/' + basketItem.productId)}>
                                <div className="basket_img">
                                    <img
                                        src={process.env.REACT_APP_API_URL + basketItem.product.image} alt="/" />
                                </div>

                                <div className="basketItem__Inner">
                                    <div className="productNameBasket">
                                        {basketItem.product.title}
                                    </div>


                                    <div className="productsParam">Автор</div>
                                    <div className="productsdesc">
                                        {basketItem.writer.name}
                                    </div>

                                    <div className="productsParam">Жанр</div>
                                    <div className="productsdesc">
                                        {basketItem.genre.name}
                                    </div>

                                    <div className="productsinfo">
                                        Год издания: {basketItem.product.productionYear}
                                    </div>

                                    <div className="productsinfo">
                                        Количиество страниц: {basketItem.product.pageCount}
                                    </div>

                                    <div className="productsinfo">
                                        Издательство: {basketItem.product.edition}
                                    </div>

                                    <div className="price">{basketItem.product.price} BYN/Шт</div>
                                </div>
                            </div>

                            <div
                                className="remove_btn"
                                onClick={() => removeBasketItem(basketItem.productId)}
                            >Удалить</div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Basket