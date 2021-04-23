import React,{useState} from 'react'
import ProgressBar from './ProgresBar'


function UploadForms() {

        const[file,setFile] = useState(null);
        const[error,setError] = useState(null);
    const ChangeHandler = (e)=>{
    
        let selected = e.target.files[0];
        const types = ['image/png','image/jpeg'];

        if (selected && types.includes(selected.type)) {

            setFile(selected)
            setError('');

        }else{

            setFile(null);
            setError("png or jpeg");
        }

    }
 
    return (
        <form>

        <label className='label'>
        <input type="file" onChange ={ChangeHandler}/>
        <span>+</span>
        </label>
        
        
            <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar  file = {file} setFile = {setFile} />}
            
            
            </div>          
        </form>
      
    )
}

export default UploadForms
