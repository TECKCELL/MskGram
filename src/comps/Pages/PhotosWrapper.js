import React,{useState,useEffect} from 'react';
import UploadForms from '../PhotosComponents/UploadForms';
import ImageGrid from '../PhotosComponents/ImageGrid';
import Modal from '../PhotosComponents/Modal';
import Title from './Title'

function PhotosWrapper() {
    const [SelectedImage,SetSelectedImage] = useState(null);
    const [CurentUserName,SetCurentUserName] = useState(null);
    
    useEffect(() => {

        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        SetCurentUserName(idToken.idToken.claims.name);
        
    },[])

    return (
        <div>
        <Title CurentUserName = {CurentUserName} />
            <UploadForms/>
                <ImageGrid SetSelectedImage = {SetSelectedImage}/>
                 {SelectedImage &&<Modal SelectedImage={SelectedImage}SetSelectedImage = {SetSelectedImage}/>}
        </div>
    )
}

export default PhotosWrapper
