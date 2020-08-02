import React from 'react';
import { ReactTinyLink } from 'react-tiny-link'

const BlogCard = (props) => {
    return (
        <div style={{padding: '8px', float: 'left'}}>
            <ReactTinyLink
            width='30vw'
            cardSize="small"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url={props.blog.blog_url}
            />
        </div>
    );
}
 
export default BlogCard;