import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Form from '@components/Form';

describe('Form', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Form handleLabelClick={jest.fn()} isSignup={true} onSubmit={jest.fn()}>
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
        <Form handleLabelClick={handleLabelClick} isSignup={true} onSubmit={jest.fn()}>
          <input></input>
        </Form>
      );
      wrapper.find('label').at(0).simulate('click');
      wrapper.find('label').at(1).simulate('click');
      expect(handleLabelClick).toHaveBeenCalledTimes(2);
    });
  });
});
