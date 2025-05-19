import {  useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark, handleMarkeasRead}) => {
    const [blogs , setBlogs]  = useState([]);

    useEffect(()=>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
        // console.log(data);
    }, [])
    return (
        <div className="md:w-2/3">
            
           {
            blogs.map((blog,id)=> {
                    return  <Blog key={id}
                     handleAddToBookmark={handleAddToBookmark}
                     handleMarkeasRead={handleMarkeasRead}
                    blog={blog}></Blog>
                 }) 
           }
        </div>
    );
};

export default Blogs;

