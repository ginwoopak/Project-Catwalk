/* eslint-disable indent */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { AppContext } from '../../app.jsx';
import RelatedProducts from './RelatedProducts.jsx';

const renderComponent = () => render(<RelatedProducts />);

afterEach(cleanup);

it('displays related product title', () => {
  renderComponent();
  //   expect(getByText("Hello world React!")).toMatchInlineSnapshot(`
  //   <h1>
  //     Hello world React!
  //   </h1>
  // `);
  expect(document.body).toHaveTextContent(<h2>Related Products</h2>);
});
