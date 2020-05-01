import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Form from '@components/Form';

describe('Form', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Form handleButtonClick={jest.fn()} isSignup={true} onSubmit={jest.fn()}>
          <input></input>
        </Form>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('labels', () => {
    it('should call handleLabelClick when either of the labels is clicked', () => {
      const handleLabelClick = jest.fn();
      const wrapper = mount(
        <Form handleButtonClick={handleLabelClick} isSignup={true} onSubmit={jest.fn()}>
          <input></input>
        </Form>
      );
      wrapper.find('.button').at(0).simulate('click');
      wrapper.find('.button').at(1).simulate('click');
      expect(handleLabelClick).toHaveBeenCalledTimes(2);
    });
  });
});
