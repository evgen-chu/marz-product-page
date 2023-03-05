import React from 'react';
import { Product } from '../interfaces';
import ProductItem from '../ProductItem/ProductItem';

interface ProductItemListProps {
    products: Product[];
}
const ProductItemList = (props: ProductItemListProps) => {
    const { products } = props;
    return (<div className="grid grid-cols-3 gap-10 mt-10 mr-20 ml-20" data-testid="product-list-container-div">
        {products.map((item, ind) => (<ProductItem product={item} />))}
    </div>)
}

export default ProductItemList;