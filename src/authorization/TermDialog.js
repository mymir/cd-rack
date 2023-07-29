import { useState, Fragment } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const TermDialog = ( {handleAgree} ) => {
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleScroll = (e) => {
    const bottom = e.target.scrollTop > e.target.clientHeight;
    if(bottom) {
      setDisabled(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendAgree = () => {
    handleAgree(true);
    setOpen(false);
  };

  return (
    <Fragment>
      <Typography variant='body1' sx={{ color: 'text.secondary' }}>I accept the <Link component="button" type="button" onClick={handleClickOpen} underline="hover" sx={{ color: 'text.primary' }}>Terms Of Use</Link></Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"        
      >
        <DialogTitle id="scroll-dialog-title" sx={{ bgcolor: 'common.white', color: 'common.black', borderColor: 'rgba(0, 0, 0, 0.12)', borderStyle: 'none none solid' }}>
          Terms And Conditions
        </DialogTitle>
        <DialogContent dividers='true' onScroll={handleScroll} sx={{ bgcolor: 'common.white'}}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
            sx={{ color: 'common.black' }}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>        
        <DialogActions sx={{ p: 2, bgcolor: 'common.white', color: 'common.black', borderColor: 'rgba(0, 0, 0, 0.12)', borderStyle: 'solid none none' }}>
          <Button variant="filled" onClick={handleClose} >DISAGREE</Button>
          <Button variant="filled" disabled={disabled} onClick={sendAgree} >AGREE</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default TermDialog;