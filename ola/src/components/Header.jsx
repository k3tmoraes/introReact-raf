import React from 'react'
import  './Header.css'

function Header() {
  const [searchtTerm, setSearchterm] = React.useState('')
 
  return (
    <div className='Header'>
        <h1>Buscador de personagens - Harry Potter</h1>
        
        <input type="text" 
        placeholder='Digite o nome...'
        value={searchtTerm}
        onChange={(e) => searchtTerm( e.target.value)}
        className='search'/>
    </div>
    
  )
}

export default Header