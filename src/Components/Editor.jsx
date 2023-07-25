import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import "../App.css";

import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import {Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

// languages,scripts
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

// styling components using internal tool provided by material ui called as styled()
const Heading = styled(Box)`
  background: #1d1e22;
  display:flex;
  padding: 9px 12px;
`

const Header = styled(Box)`
  display:flex;
  background: #060606;
  color : #AAAEBC;
  justify-content: space-between;
`

const buttonStyle = {
  color:'white' , 
  fontSize:'20px'
}


export default function Editor({ heading, value, onChange}) {

  const [open, setOpen] = useState(true);  

  // handleChange in ControlledEditor
  const handleChange = (editor, data, value) =>{
    onChange(value);
  }

  const handleCopyIconClick = () =>{
    navigator.clipboard.writeText(value);
    alert("Copied to clipboard");
  }

  const handleExpandIconClick = () => {
    console.log("working");
    setOpen((prevState) => !prevState);
  };                                                  

  return (
    // main box
    <div className = {`Editor-div${open ? " " : "collapsed"}`}>

      {/* upper box */}
      <Header>
        <Heading style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
            {heading}
        </Heading>

        {/* close icon material ui */}
        <div style={{zIndex:100}}>
          <button className="btn" onClick={handleCopyIconClick}>
            <ContentCopyIcon style={buttonStyle} />
          </button>
          <button className="btn" onClick={handleExpandIconClick}>
            {open ? <ZoomInMapIcon style = {buttonStyle}  /> : <ZoomOutMapIcon style={buttonStyle}/>}
          </button>
        </div>
        
      </Header>
      {/* Editor code */}
      <ControlledEditor 
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{ 
          theme:"material",
          lineNumbers:true,
          lineWrapping: true,
        }}
        style={{ maxWidth: "350px" }}
      />

    </div>
  );
}
