import { Card } from '@mui/material';

const CardContainer = ({ children }) => {
  return (
  <Card     
    sx={{ 
      px:4, 
      py: 3, 
      my: 2, 
      boxShadow: '2px 2px 10px rgba(0,0,0,.5);',
      borderStyle: 'solid',
      borderWidth: 'thin',
      borderColor: 'rgba(225,225,225,0.2)',
      borderRadius: '2%',
      width: '400px' 
    }} 
  >
    {children}
  </Card>
  )
};

export default CardContainer;


