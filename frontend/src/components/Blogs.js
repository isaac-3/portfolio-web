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
        <div style={{height: '100vh', backgroundColor: 'rgb(105, 105, 105)', textAlign: 'center'}} id="blogs">
            <div style={{paddingTop: '72px'}}>
                <h1>My Blogs</h1>
            </div>
            {blogs.blogs.map(blog=>(
                <div style={{width: 'fit-content', marginLeft:'auto',marginRight:'auto', padding: '8px'}}>
                    <BlogCard blog={blog}/>
                </div>
            ))}
        </div>
    );
}
 
export default Blogs;