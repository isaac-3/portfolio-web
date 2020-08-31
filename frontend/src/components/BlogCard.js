import React from 'react';
import { ReactTinyLink } from 'react-tiny-link'

const BlogCard = (props) => {
    return (
        <div style={{padding: '8px'}}>
            <ReactTinyLink
            width='30vw'
            cardSize="small"
            showGraphic={true}
            maxLine={0}
            minLine={0}
            url={props.blog.blog_url}
            />
        </div>
    );
}
 
export default BlogCard;