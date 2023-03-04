import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductItem from './ProductItem';

export default {
    title: 'Product Item',
    component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />;

const getArgs = () => ({ product: {
    ProductID: 123,
    ProductName: 'test product',
    ProductPhotoURL: 'https://picsum.photos/id/6/5000/3333',
    ProductStatus: 'active'
} });

export const ShowProduct = Template.bind({});
ShowProduct.args = getArgs();