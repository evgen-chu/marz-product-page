import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductItemList from './ProductItemList';

export default {
    title: 'Product Item List',
    component: ProductItemList,
} as ComponentMeta<typeof ProductItemList>;

const Template: ComponentStory<typeof ProductItemList> = (args) => <ProductItemList {...args} />;

const getArgs = () => ({ products: [{
    ProductID: 1,
    ProductName: 'test product 1',
    ProductPhotoURL: 'https://drive.google.com/uc?export=view&id=1oDKDzup9_Nq6XBHnXsEJSXfJnblPWMhu',
    ProductStatus: 'Active'
},
{
    ProductID: 2,
    ProductName: 'test product 2',
    ProductPhotoURL: 'https://drive.google.com/uc?export=view&id=1nLM0VzYfarCFBxDznMYUylsIaVHd5e-x',
    ProductStatus: 'Active'
},
{
    ProductID: 3,
    ProductName: 'test product 3',
    ProductPhotoURL: 'https://drive.google.com/uc?export=view&id=1qYKw5JQ1OxcfVV8yEMW2pp6-txwKTdA_',
    ProductStatus: 'InActive'
} ]});

export const ShowProductList = Template.bind({});
ShowProductList.args = getArgs();