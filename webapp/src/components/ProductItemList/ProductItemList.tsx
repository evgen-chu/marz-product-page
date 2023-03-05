import React from 'react';
import { ProductItemListProps } from '../interfaces';
import ProductItem from '../ProductItem/ProductItem';

const ProductItemList = (props: ProductItemListProps) => {
    const { products } = props;
    return (<div className="grid grid-cols-3 gap-10 mt-10 mr-20 ml-20" data-testid="product-list-container-div">
        {products.map((item, ind) => (
            <div key={ind}>
                <ProductItem product={item} />
            </div>
))}
    </div>)
}

export default ProductItemList;