import React, {useEffect} from 'react'
import useStorage from '../../hooks/useStorage';
function ProgresBar({file,setFile}) {

    const {progress,url} = useStorage(file);
    console.log(progress,url);
    useEffect(() => {
        if (url) {
            setFile(null);
        }
      
    },[url,setFile] )

    return (
        <div style={{width:progress + '%'}}>
            
        </div>
    )
}

export default ProgresBar




