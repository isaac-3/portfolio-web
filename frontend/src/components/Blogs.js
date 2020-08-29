import React from 'react';
import {useState, useEffect} from 'react'
import BlogCard from './BlogCard';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  
    purple: {
        border: '3px solid black',
        fontSize: '350px',
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: 'white',
    },
  }));
const Blogs = () => {
    const classes = useStyles();

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
        <div style={{height: '100vh', textAlign: 'center', backgroundColor: 'white'}} id="blogs">
            <div style={{paddingTop: '72px'}}>
                <h1>My Blogs</h1>
            </div>
            {/* <div className='blog-cont'>
                {blogs.blogs.map(blog=>(
                    <BlogCard blog={blog}/>
                ))}
            </div> */}
            {/* <div className='cirr'>
                <h1 className='cirrnn'>
                    ic
                </h1>
            </div> */}
                <div className={classes.root} id='cirr'>
      <Avatar className={classes.purple} id='cirr'>IC</Avatar>
    </div>
        </div>
    );
}
 
export default Blogs;