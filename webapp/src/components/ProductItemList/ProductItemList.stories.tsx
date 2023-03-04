import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductItemList from './ProductItemList';

export default {
    title: 'Product Item List',
    component: ProductItemList,
} as ComponentMeta<typeof ProductItemList>;

const Template: ComponentStory<typeof ProductItemList> = (args) => <ProductItemList {...args} />;

const getArgs = () => ({ products: [{
    ProductID: 123,
    ProductName: 'test product',
    ProductPhotoURL: 'https://picsum.photos/id/6/5000/3333',
    ProductStatus: 'active'
} ]});

export const ShowProduct = Template.bind({});
ShowProduct.args = getArgs();