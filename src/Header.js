import React, { useContext } from 'react'
import {FaCompactDisc, FaAndroid, FaMailchimp} from 'react-icons/fa'
import DataContext from './Context/DataContext'

const Header = ({title}) => {
  const {width} = useContext(DataContext)
  return (
    <header className='Header'>
      <h1>{title}</h1>
      { width<700 ? <FaAndroid/>
      : width <900 ? <FaMailchimp/> : <FaCompactDisc/> }
    </header>
  )
}

export default Header