import React, { useState, useEffect } from "react";
import { Product } from "../../components/interfaces";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductItemList from "../../components/ProductItemList/ProductItemList";
import { getProductData } from "../ApiHelper";
import PageWrapper from '../PageWrapper';

const item = {
  ProductID: 123,
  ProductName: 'test product',
  ProductPhotoURL: 'https://picsum.photos/id/6/5000/3333',
  ProductStatus: 'active'
}
const ProductsPage = () => {
  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */
 const [productData, setProductData] = useState<Product[]>([]);
  const getProducts = async () => {
    //setLoadingState(DATA_STATES.waiting);
    const { productData, errorOccured } = await getProductData();
    setProductData(productData.products);
    console.log("Product name: ", productData.products[0].ProductName)

    // setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  useEffect( () => {
     getProducts();
  }, []);

 console.log("productData: ", productData);
   

  return (
    <PageWrapper>
      <ProductItemList products={productData} />
    </PageWrapper>
  );
};

export default ProductsPage
