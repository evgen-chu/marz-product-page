import React from "react";
import { create, ReactTestRenderer} from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ProductItemList from './ProductItemList';

const DEFAULT_PROPS = {
    products: [{
            ProductID: 123,
            ProductName: 'test product',
            ProductPhotoURL: 'https://picsum.photos/id/6/5000/3333',
            ProductStatus: 'active'
    }]
}

describe('ProductItemList', () => {
  let tree: ReactTestRenderer;
  beforeEach(() => {
    tree = create(
        <MemoryRouter>
            <ProductItemList {...DEFAULT_PROPS}/>
        </MemoryRouter>
    );
  });
  afterEach(() => {
    tree.unmount();
  });

  it('should render ProductItemList', async () => {
    const component = tree.root;
    expect(component).toBeDefined();
    expect(component.findByProps({'data-testid': 'product-list-container-div'}));
  });
});