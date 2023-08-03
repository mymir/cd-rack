import * as React from 'react';

import useScrollTrigger from '@mui/material/useScrollTrigger';

const ScrollHandler = props => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(props.children, {
      style: {
        backgroundColor: trigger ? "#1a1a1a" : "transparent",
        paddingTop: trigger ? "4px" : "10px",
        transition: trigger ? "0.3s" : "0.5s"
      }
    });
  };

const ScrollHeader = (props) => {
    return (
        <ScrollHandler {...props}>{props.children}</ScrollHandler>
    );
    
  };

export default ScrollHeader;