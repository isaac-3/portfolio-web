import React from 'react';
import {useState, useEffect} from 'react'
import BlogCard from './BlogCard';

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
        <div style={{height: '100vh', textAlign: 'center'}} id="blogs">
            <div style={{paddingTop: '72px'}}>
                <h1>My Blogs</h1>
            </div>
            <div className='blog-cont'>
                {blogs.blogs.map(blog=>(
                    <BlogCard blog={blog}/>
                ))}
            </div>
        </div>
    );
}
 
export default Blogs;