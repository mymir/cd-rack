import { Card } from '@mui/material';

const CardContainer = ({ children }) => {
  return (
  <Card 
    color="primary"
    sx={{ px:4, py: 3, mt: 4, mb: 2, boxShadow: 2 }} 
  >
    {children}
  </Card>
  )
}

export default CardContainer;


