import React, { useContext, useState, useEffect } from 'react'
import {Box,styled} from '@mui/material'
import { DataContext } from '../Context/DataProvider'


const ResultBox = styled(Box)`
    height : 50vh;
`


export default function Result() {

    //below code is used for timeout
    const [getSrc, setSrc] = useState('');

    const {getHtml, getCss , getJavascript} = useContext(DataContext);

    // src
    const sourceCode = `
        <html>
            <body>${getHtml}</body>
            <style>${getCss}</style>
            <script>${getJavascript}</script>
        </html>
    `

    // useEffect used for timeout
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrc(sourceCode);
        }, 800);

        return () => clearTimeout(timeout);

    }, [sourceCode]);

  return (
    <ResultBox>
        <iframe 
            srcDoc={getSrc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
        />
    </ResultBox>
  )
}
