import React from 'react';
import Navbar from '../Layout/Navbar'

const Title = ({CurentUserName}) => {


  return (
    <div>
       <Navbar/>
    
   
    <div className="title">
      <h1>MysakaGram</h1>
      <h1>Visiteur:{CurentUserName}</h1>
      <h2>Photos</h2>
      <p>Clique sur '+' pour ajouter une photo et sur la photo pour l'agrandir</p>
    </div>
    </div>
  )
}

export default Title;