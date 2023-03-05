import { ReactJSXElement } from '@storybook/theming/dist/ts3.9/_modules/@emotion-react-types-jsx-namespace';
import React from 'react';
import PageWrapper from '../../pages/PageWrapper';
import { DATA_STATES } from '../enums';
import Spinner from '../Spinner/Spinner';


interface PageContentProps {
    loadingState: DATA_STATES;
    content: ReactJSXElement;
};
const PageContent = (props: PageContentProps) => {
    const {loadingState, content} = props;

    let pageContent;
    if (loadingState === DATA_STATES.WAITING)
    pageContent = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  else if (loadingState === DATA_STATES.LOADED) 
  pageContent = content;
  else
  pageContent = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );
    return (
        <PageWrapper>
        {pageContent}
        </PageWrapper>
    );
}

export default PageContent;