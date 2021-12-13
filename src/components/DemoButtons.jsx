import React from 'react';
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



export const DemoActive = function (props) {
  return (
    <>
      <a className="btn btn-outline-dark" href={props.url}>
        <VisibilityIcon /> Demo
      </a>
    </>
  )
}


export const DemoInactive = function (props) {
  return (
    <>
      <a className="btn btn-outline-dark demo-inactive" href>
        <VisibilityOffIcon /> Sorry 
      </a>
    </>
  )
}