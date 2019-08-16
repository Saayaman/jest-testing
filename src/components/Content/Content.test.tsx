import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe("content tests", () => {
  it("Content should render correctly", () => {
    const { getByText } = render(<Content name="Ayako" />)
    expect(getByText('Hello, Ayako')).toBeInTheDocument();
  });

  it("Content shallow render test", () => {
    const wrapper = shallow(<Content name="Erika" />);
    const welcome = <div>Hello, Erika</div> ;
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.contains(welcome)).toEqual(true);
  })

  it("Snapshottesting", () => {
    const tree = renderer.create(<Content name="Eugene" />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
