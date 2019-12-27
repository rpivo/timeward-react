import * as React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';
import { App } from '../components/App/App';

jest.mock("react-dom", () => ({ render: jest.fn() }));

beforeAll(() => {
  document.body.innerHTML = `<div id = "root"></div>`;
});

describe('index', () => {
  it('should call ReactDOM.render', () => {
    require('../index');
    expect(render).toHaveBeenCalledWith(
      <App />,
      document.getElementById('root')
    );
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});