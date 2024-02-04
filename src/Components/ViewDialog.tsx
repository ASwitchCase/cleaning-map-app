import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { IssueTypeModel } from "src/Models/IssueTypeModel";
import { SiteModel } from "src/Models/SiteModel";

export interface SimpleDialogProps {
    open: boolean;
    onClose: Function;
    data: SiteModel;
}
  
  const ViewDialog = (props: SimpleDialogProps) => {
    const { onClose, open } = props;
  
    const handleClose = () => {
      onClose(false)
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        Open alert dialog
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.data.description}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className='issue-type-container'> 
                {props.data.issues.map(item => <Chip label={item.name}/>)}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </Dialog>
    );
  }

  export default ViewDialog;