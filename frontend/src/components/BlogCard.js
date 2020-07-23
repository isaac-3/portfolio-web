import React from 'react';
import { ReactTinyLink } from 'react-tiny-link'

const BlogCard = (props) => {
    return (
        <div style={{borderRadius: '24px'}}>
            <ReactTinyLink
            width='20vw'
            cardSize="large"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url="https://medium.com/"
            />
        </div>
    );
}
 
export default BlogCard;