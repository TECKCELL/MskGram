import React from 'react'
import useFireStore from  '../../hooks/useFireStore'
import {motion} from 'framer-motion'

function ImageGrid({SetSelectedImage}) {

    const {docs} = useFireStore('images')
   

    return (
        <div className="img-grid">
           {docs && docs.map(doc => (

               <motion.div className="img-wrap" key={doc.id}
               layout
               whileHover={{opacity:1}}
               onClick = {()=>{
                   SetSelectedImage(doc.url)
               }}
               >
                   <motion.img src={doc.url} alt="uploaded pics"
                       initial={{opacity:0}}
                       animate={{opacity:1}}
                       transition={{delay:1}}
                   />
               </motion.div>
           ))}

        </div>
    )
}

export default ImageGrid
