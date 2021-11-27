import './App.css';
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import Button from "./components/Button";
import { useState } from 'react';
import axios from 'axios';

function App() {

  const serverPosts = [
    {
      id: 1,
      title: "Saurabh Mahra",
      body: "This is a great internship opportunity.",
      userId: 1,
    },
  ]
  const [responseData, updateResponseData] = useState(serverPosts);

  // A function to retrieve comments
  const retrivePosts = async ()=>{
    // const response = await api.get("/contacts");
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
    updateResponseData(response.data);
    console.log(responseData);
    return response.data;
    
  }
  
  const addPost = async ()=>{
    console.log();
    const data = {
      title: "A new post",
      body: "This is a new post from Saurabh",
      userId: 1
    }
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
    updateResponseData(response.data);
    console.log(responseData);
    return response.data;
  }
  
  const updatePost = async ()=>{
    const data = {
      id: 1,
      title: "A new post",
      body: "This is a new post from Saurabh",
      userId: 1
    }
    const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", data);
    updateResponseData(response.data);
    console.log(responseData);
    return response.data;
  }
  
  const deletePost = async ()=>{
    const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
    updateResponseData(response.data);
    console.log(responseData);
    return response.data;
  }
  

  const userComments = [
    {
      id: 1,
      name: "Saurabh Mahra",
      commentText: "This is a great internship opportunity. Thank you.",
      datePosted: "9:55pm",
    },
    {
      id: 2,
      name: "Papersdrop",
      commentText: "We are following your comments. Great to hear.",
      datePosted: "11:05pm",
    }
  ]
  
  

  return (
    <div >
      <Comments userComments={userComments}/>
      
      <div className="space" style={{marginTop:"100px"}}></div>

      <div style={{padding: "0 2rem 0 2rem"}}>
      <Button onClick={updatePost} text="Update">Update Post</Button>
      <Button onClick={addPost} text="Add">Add Post</Button>
      <Button onClick={deletePost} text="Delete">Delete Post</Button>
      <Button onClick={retrivePosts} text="Get">Get Posts</Button>
      </div>
      <Posts responseData={responseData}/>


    </div>
  );
}

export default App;
