import { useContext } from "react";

import Editor from "./Editor";
import {Box,styled} from"@mui/material";

// create DataContext ko import kiya
import {DataContext} from "../Context/DataProvider";

// material ui library styled() provide karta hai
const CodeBox = styled(Box)`
    display : flex;
    background-color : #060606;
    height: 50vh;
`

const Code = () => {

    const {getHtml, setHtml, getCss , setCss, getJavascript , setJavascript} = useContext(DataContext);

    return(
        <CodeBox>
            <Editor 
                heading = "HTML"
                value={getHtml}
                onChange={setHtml}
            />
            <Editor 
                heading = "CSS"
                value={getCss}
                onChange={setCss}
            />
            <Editor 
                heading = "JS"
                value={getJavascript}
                onChange={setJavascript}
            />
        </CodeBox>
    );
}

export default Code;