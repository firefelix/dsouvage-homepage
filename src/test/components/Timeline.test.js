/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Timeline from '../../components/Timeline/Timeline';
import { SectionTitle, Paragraph } from '../../styles';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<Timeline SectionTitle={SectionTitle} Paragraph={Paragraph} />);
});
