/* import { useState, useEffect } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import { Navigate, Route, useNavigate } from "react-router-dom";
import {format} from "date-fns"
import { Link, Routes} from 'react-router-dom'
import api from "./api/posts"
import EditPost from "./EditPost";
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { DataProvider } from "./Context/DataContext";



function App() {   
   const [posts, setPosts] = useState([
    //  {
    //   id: 1,
    //   title: "my 1st post",
    //   datetime: "July 01, 2023 11:17:36 AM",
    //   body:"learning react"
    // },
    // {
    //   id: 2,
    //   title: "my 2st post",
    //   datetime: "July 01, 2023 11:17:36 AM",
    //   body:"learning js"
    // },
    // {
    //   id: 3,
    //   title: "my 3st post",
    //   datetime: "July 01, 2023 11:17:36 AM",
    //   body:"learning node.js for web development"
    // } 
  ])
  const [search, setSearch] = useState("");  
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const Navigate = useNavigate()
  const {width} = useWindowSize()
  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts')

  useEffect(()=> {
    setPosts(data)
  },[data])

  // useEffect(() => {
  //   const fetchData = async () =>{
  //     try{
  //       const response = await api.get('/posts')
  //       setPosts(response.data)
  //     } catch(err){
  //       if(err.response){
  //         //not in the 200 response range 
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);          
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   }
  //   fetchData()
  // },[]) 

  useEffect(() => {
    const filteredresult = posts.filter((e) => ((e.title).toLowerCase()).includes(search.toLowerCase()) || ((e.body).toLowerCase()).includes(search.toLowerCase()));
    setSearchResult(filteredresult.reverse());
    }, [posts, search])
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1] .id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime, body: postBody}
    try{
      const POST = await api.post('/posts',newPost)

    const allPost = [...posts, newPost];
    setPosts(allPost);
    setPostBody("")
    setPostTitle('') 
    Navigate('/') 
    } catch(err){
      if(err.response){
        //not in the 200 response range 
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);          
      } else {
        console.log(`Error: ${err.message}`);
      }
    }      
  }
const handleDelete = async (id) => {
  try{ 
    //detele in axios json server
    await api.delete(`/posts/${id}`) 
    const postslist = posts.filter((post)=>post.id !== id)
    setPosts(postslist);
    Navigate('/')
  }catch(err){
    if(err.response){
      //not in the 200 response range 
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);          
    } else {
      console.log(`Error: ${err.message}`);
    }
  }  
}
const handleEdit = async (id)=>{
  console.log(id);
  const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const editPost = {id, title: editTitle, datetime, body: editBody}
  try{
    const updatedpost = await api.put(`/posts/${id}`, editPost)
    setPosts(posts.map((post)=> post.id === id ? {...updatedpost.data} : post))
    setEditBody("")
    setEditTitle('') 
    Navigate('/') 
  } catch (err){
    console.log(err.message);
  }
    
} 

  return ( 
    <div className="App">
      <DataProvider>
          <Header
            title = "dk social media"
            width = {width}
            />
          <Nav
            search={search}
            setSearch={setSearch}
          />
          <Routes>
            <Route path='/' element={<Home
              searchResult = {searchResult}
              fetchError = {fetchError}
              isLoading = {isLoading}

            />} />
            <Route path="/post">
              <Route index element={<NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSubmit={handleSubmit}
              />} />
              <Route path=":id" element={<PostPage
                posts = {posts && posts}
                handleDelete = {handleDelete}
              />} />
            </Route>
            <Route path="/edit/:id" element={<EditPost
              posts = {posts}
              editBody = {editBody} 
              editTitle =  {editTitle} 
              setEditBody = {setEditBody}
              setEditTitle = {setEditTitle}
              handleEdit = {handleEdit}
            /> }/>
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<Missing/>} />
          </Routes>      
          <Footer/>
      </DataProvider>      
    </div>
  );
}

export default App; */
