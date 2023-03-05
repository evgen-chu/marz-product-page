import React from "react";
import { create, ReactTestRenderer} from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ProductItem from './ProductItem';

const DEFAULT_PROPS = {
    product: {
            ProductID: 123,
            ProductName: 'test product',
            ProductPhotoURL: 'https://picsum.photos/id/6/5000/3333',
            ProductStatus: 'Active'
    }
}

describe('ProductItem', () => {
  let tree: ReactTestRenderer;
  beforeEach(() => {
    tree = create(
        <MemoryRouter>
            <ProductItem {...DEFAULT_PROPS}/>
        </MemoryRouter>
    );
  });
  afterEach(() => {
    tree.unmount();
  });

  it('render ProductItem', async () => {
    const component = tree.root;
    expect(component).toBeDefined();
    expect(component.findByProps({'data-testid': 'product-container-div'}));
  });
});