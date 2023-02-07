import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS_ROUTE } from '../../utils/consts';

const ProductItem = ({
    productsName,
    productId,
    productImg,
    productAuthor,
    productGenre,
    price
}) => {

    const navigate = useNavigate();

    return (
        <div className="productsItem"
            onClick={() => navigate(PRODUCTS_ROUTE + '/' + productId)}>

            <div className="productLink">
                <img src={process.env.REACT_APP_API_URL + productImg} alt="/" />
            </div>
            <div className="productsItem__Inner">
                <div className="productName">
                    {productsName}
                </div>
                <div className="productAuthor">Автор</div>
                <div className="productsNameAuthor">
                    {productAuthor}
                </div>
                <div className="productAuthor">Жанр</div>
                <div className="productsNameAuthor">
                    {productGenre}
                </div>
                <div className="price">{price} BYN/Шт</div>
            </div>
        </div>
    )
}

export default ProductItem;