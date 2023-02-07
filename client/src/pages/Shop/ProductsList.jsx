import React from 'react';
import ProductItem from './ProductsItem';

const ProductsList = ({ productsPage }) => {

    return (
        <div className="productsList">

            {productsPage.map(products =>
                <ProductItem
                    key={products.id}
                    productsName={products.title}
                    productId={products.id}
                    productImg={products.image}
                    productAuthor={products.writer.name}
                    productGenre={products.genre.name}
                    price={products.price} />
            )}

        </div>
    )
}

export default ProductsList