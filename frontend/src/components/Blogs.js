import React from 'react';
import {useState, useEffect} from 'react'

const Blogs = () => {

    let [blogs, setBlogs] = useState()

    useEffect(()=>{
        fetch("http://localhost:3000/blogs")
        .then(res=>res.json())
        .then(blogs=>(
            setBlogs({blogs: blogs})
        ))
    },[])

    if (blogs == undefined){
        return <h1>loading</h1>
    }

    return (
        <div style={{height: '100vh', backgroundColor: 'green', textAlign: 'center'}} id="blogs">
            <div style={{paddingTop: '72px'}}>
                <h1>My Blogs</h1>
            </div>
            {blogs.blogs.map(blog=>(
                <h1>Blog Name: {blog.name}</h1>
            ))}
        </div>
    );
}
 
export default Blogs;