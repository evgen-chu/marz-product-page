import React from "react";
import { create, ReactTestRenderer} from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ProductItem from './ProductItem';

const DEFAULT_PROPS = {
    product: {
            ProductID: 123,
            ProductName: 'test product',
            ProductPhotoURL: 'https://picsum.photos/id/6/5000/3333',
            ProductStatus: 'active'
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

  it('', async () => {});
//   it('rendersMainIcon', async () => {
//     const testInstance = tree.root;
//     await testInstance.findByProps({ 'data-testid': 'header-container-div'});
//     await testInstance.findByProps({ 'data-testid': 'main-icon'});
//     await testInstance.findByProps({ 'data-testid': 'link-0'});
//   });
});