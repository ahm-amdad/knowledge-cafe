import {  useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark}) => {
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
                    return  <Blog key={id} handleAddToBookmark={handleAddToBookmark}
                    blog={blog}></Blog>
                 })
              
           }


        </div>
    );
};

export default Blogs;

