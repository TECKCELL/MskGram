import React from 'react'
import {motion} from 'framer-motion'

function Modal({SelectedImage,SetSelectedImage}) {

    const handleClick =(e)=>{
        if(e.target.classList.contains('backdrop')){
            SetSelectedImage(null);

        }
        
    }
    return (
        <motion.div className="backdrop"
        initial={{opacity:0}}
        animate={{opacity:1}}
        onClick={handleClick}>
            <motion.img src={SelectedImage} alt="enlarged pic"
                initial={{y:"-100vh"}}
                animate={{y:0}}
            />
            
        </motion.div>
    )
}

export default Modal
