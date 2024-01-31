import { Chip } from '@mui/material';
import React from 'react'
import { IssueTypeModel } from 'src/Models/IssueTypeModel'

const IssueType = (props: {issueType: IssueTypeModel, onDelete:Function}) => {
    const handleDelete = () => {
        props.onDelete(props.issueType.id)
    };
    
  return (
    <div>
        <Chip label={props.issueType.name} onDelete={handleDelete} />
    </div>
  )
}

export default IssueType