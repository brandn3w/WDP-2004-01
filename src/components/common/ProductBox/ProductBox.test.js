import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBox />);
    expect(component).toBeTruthy();
  });
  it('should render <img> with class image and correct value of src', () => {
    const image = './image.jpg';
    const component = shallow(<ProductBox image={image} />);
    expect(component.find('img').hasClass('image')).toEqual(true);
    expect(component.find('img').prop('src')).toEqual(image);
  });
});
