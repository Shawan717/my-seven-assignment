import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleClickCard,handleTimes}) => {
    const[blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            
            <div className="grid grid-cols-3">
            {
                blogs.map(blogs=><Blog key={blogs.Id} blog={blogs} handleClickCard={handleClickCard} handleTimes={handleTimes}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;