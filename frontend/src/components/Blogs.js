import React from 'react';
import {useState, useEffect} from 'react'
import BlogCard from './BlogCard';

const Blogs = () => {


    return (
        <div style={{height: '100vh', textAlign: 'center'}} id="blogs">
            <div style={{paddingTop: '72px'}}>
                <h1>My Blogs</h1>
            </div>
            <div className='blog-cont'>
                {/* {blogs.blogs.map(blog=>(
                    <BlogCard blog={blog}/>
                ))} */}
            </div>
        </div>
    );
}
 
export default Blogs;