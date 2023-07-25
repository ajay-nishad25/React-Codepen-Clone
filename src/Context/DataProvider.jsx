import {createContext, useState} from 'react';



export const DataContext = createContext();

const DataProvider = ({ children }) =>{
    
    const[getHtml,setHtml] = useState('');
    const[getCss,setCss] = useState('');
    const[getJavascript,setJavascript] = useState('');

    return(
        <DataContext.Provider
            value={{
                getHtml,
                setHtml,
                getCss,
                setCss,
                getJavascript,
                setJavascript,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
