import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from "./ProductsPage";
import { PRODUCT_URL } from "../ApiHelper";

export default {
    title: 'Products Page',
    component: ProductsPage,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
    mockData: [
        {
            url: PRODUCT_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [
                    {
                        "ProductID": 1,
                        "ProductName": 'test product 1',
                        "ProductPhotoURL": 'https://picsum.photos/id/6/5000/3333',
                        "ProductStatus": 'Active'
                    },
                    {
                        "ProductID": 2,
                        "ProductName": 'test product 2',
                        "ProductPhotoURL": 'https://picsum.photos/id/6/5000/3333',
                        "ProductStatus": 'Active'
                    },
                    {
                        "ProductID": 3,
                        "ProductName": 'test product 3',
                        "ProductPhotoURL": 'https://picsum.photos/id/6/5000/3333',
                        "ProductStatus": 'Active'
                    },
                    {
                        "ProductID": 4,
                        "ProductName": 'test product 4',
                        "ProductPhotoURL": 'https://picsum.photos/id/6/5000/3333',
                        "ProductStatus": 'Active'
                    },
            
                ],
                message: ""
            },
        },
    ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
    mockData: [
        {
            url: PRODUCT_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [],
                message: ""
            },
        },
    ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: PRODUCT_URL,
            method: 'GET',
            status: 500,
            response: {
                data: [],
                message: "Error"
            }
        },
    ],
};
