import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';

jest.mock("react-dom", () => ({ render: jest.fn() }));

beforeAll(() => {
  document.body.innerHTML = `<div id = "root"></div>`;
});

describe('index', () => {
  it('should call ReactDOM.render', () => {
    require('./index');
    expect(render).toHaveBeenCalledWith(
      <App compiler='TypeScript' framework='React' />,
      document.getElementById('root')
    );
  });
});