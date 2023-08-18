import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import DataContext from './Context/DataContext'


const EditPost = () => {
  const {posts, handleEdit, editBody, editTitle, setEditBody, setEditTitle} = useContext(DataContext)
  const {id} = useParams() 
  // const post = posts.find((post) => {(post.id) == id});  
  const post = posts.find(post => (post.id) == id);   
  useEffect(()=>{
    if(post){
      setEditBody(post.body)
      setEditTitle(post.title)
    }
  },[post, setEditBody, setEditTitle])

  return (
    <main className='NewPost'>
      {editTitle && 
        <>
          <h2>Edit Post</h2>
          <form className='newPostForm' onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="postTitle">Title</label>
            <input 
              type="text" 
              id='postTitle'
              required
              value={editTitle}
              onChange={(e)=>setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Body</label>
            <textarea 
              type="text" 
              id='postBody'
              required
              value={editBody}
              onChange={(e)=>setEditBody(e.target.value)}
            />
            <button type='submit' onClick={()=>handleEdit(post.id)}> Submit </button>
          </form>
        </>
      }
      {!editTitle &&
        <>
          <h2>Page Not Found</h2>  
          <p>Well, That's disappointing</p>    
          <p><Link to={"/"} >Click to Visit our Homepage</Link></p>
        </>      
      }
    </main>
  )
}

export default EditPost