import React, { useState, useEffect } from "react";
import { DATA_STATES } from "../../components/enums";
import { Product } from "../../components/interfaces";
import PageContent from "../../components/PageContent/PageContent";
import ProductItemList from "../../components/ProductItemList/ProductItemList";
import { getProductData } from "../ApiHelper";


const ProductsPage = () => {
  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */
 const [loadingState, setLoadingState] = useState(DATA_STATES.WAITING);
 const [products, setProducts] = useState<Product[]>([]);
  const getProducts = async () => {
    setLoadingState(DATA_STATES.WAITING);
    const { productData, errorOccured } = await getProductData();
    setProducts(productData.products);
    setLoadingState(errorOccured ? DATA_STATES.ERROR : DATA_STATES.LOADED);
  };

  useEffect( () => {
     getProducts();
  }, []);

  const productsPageContent = (<div
    className="flex flex-row justify-center w-full pt-4"
    data-testid="products-container"
  >
    <ProductItemList products={products}/>
  </div>)

  return <PageContent loadingState={loadingState} content={productsPageContent} />

};

export default ProductsPage
