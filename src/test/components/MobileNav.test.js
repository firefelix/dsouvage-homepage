/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import MobileNav from '../../components/MobileNav/MobileNav';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<MobileNav />);
});
