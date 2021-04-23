
import {useState,useEffect} from 'react';
import {projectFirestore} from '../firebase/config';

function useFireStore(collection) {
   const [docs, setdocs] = useState([]);

   useEffect(() => {
       
    const unsub = projectFirestore.collection(collection)
    .orderBy('createdAt','desc')
    .onSnapshot((snap)=>{

        let documents = [];
        snap.forEach(doc=>{
            documents.push({...doc.data(),id:doc.id});
        })
        setdocs(documents);
    });

    return () => unsub();

   }, [collection])


   return {docs}
}

export default useFireStore


