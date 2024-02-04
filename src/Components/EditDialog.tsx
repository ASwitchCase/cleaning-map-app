import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { IssueTypeModel } from "src/Models/IssueTypeModel";
import { SiteModel } from "src/Models/SiteModel";
import CheckSelectBox from "./CheckSelectBox";

export interface SimpleDialogProps {
    open: boolean;
    onClose: Function;
    data: SiteModel;
    issueTypes: IssueTypeModel[];
    onEdit: Function
  }
  
  const EditDialog = (props: SimpleDialogProps) => {
    const [description, setDescription] = React.useState<string>("");
    const [issues,setIssues] = React.useState([])
    const { onClose, open } = props;
  
    const handleClose = () => {
      onClose(false)
    };

    const handleEdit = () => {
      let newData = props.data
      newData.issues = issues
      newData.description = description
      onClose(false)
      props.onEdit(props.data.id,newData)
    }

    const updateIssues = (newIssues:string[]) =>  {
      setIssues(newIssues)
    }

    useEffect(() =>{
    },[issues,description])
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit Site Info</DialogTitle>
        <CheckSelectBox onEdit={updateIssues} options={props.issueTypes}/>

        <TextField
          id="standard-textarea"
          label="Description"
          placeholder={props.data.description}
          multiline
          variant="filled"
          rows={4}
          maxRows={4}
          sx={{margin:2}}
          onChange={(e)=>setDescription(e.target.value)}
        />
        <Button onClick={handleEdit} sx={{margin:2}} variant="outlined">Save</Button>
      </Dialog>
    );
  }

  export default EditDialog;
  