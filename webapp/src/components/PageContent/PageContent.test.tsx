import React from "react";
import { create, ReactTestRenderer} from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import PageContent from './PageContent';
import { DATA_STATES } from "../enums";

const mockReactElement = (<div data-testid='content-element'>Test</div>);

const DEFAULT_PROPS = {
    loadingState: DATA_STATES.LOADED,
    content: mockReactElement
}

describe('ProductItem', () => {
  let tree: ReactTestRenderer;
  beforeEach(() => {
    tree = create(
        <MemoryRouter>
            <PageContent {...DEFAULT_PROPS}/>
        </MemoryRouter>
    );
  });
  afterEach(() => {
    tree.unmount();
  });

  it('render PageContent', async () => {
    const component = tree.root;
    expect(component).toBeDefined();
    expect(component.findByProps({'data-testid': 'page-content-wrapper'}));
    expect(component.findByProps({'data-testid': 'content-element'}));
  });
});