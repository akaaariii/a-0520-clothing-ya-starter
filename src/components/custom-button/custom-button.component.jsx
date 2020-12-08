import React from 'react';

// import './custom-buttom.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
