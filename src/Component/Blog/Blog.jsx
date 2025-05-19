import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";

 const Blog = ({blog,handleAddToBookmark,handleMarkeasRead}) => {
    const {hastag,posted_date, title, reading_time, cover, id, author, author_image} = blog;
    // console.log(blog);
    return (
    
        <div className='mb-20 mt-5'>
            <img className='w-full mb-6' src={cover} alt={`cover ${title}`} />
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    
                    <div className='mr-4 '>
                        <img className='rounded-full w-14' src={author_image} alt="author-img" />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold pb-1.5'>{author}</h3>
                        <h3>{posted_date}</h3>
                    </div>

                </div>

                <div className="flex items-center">

                    <span>{reading_time} min read</span> 
                    <button onClick={()=>handleAddToBookmark(blog.title)} className='ml-1'><CiBookmarkPlus /></button>

                </div>
            </div>
            <h2 className='text-4xl font-bold mb-4'> {title}</h2>
            <p><a className='text-[#0000ffcc]' href="">{hastag}</a></p>
            <button onClick={()=> handleMarkeasRead(reading_time,id)}>Mark as Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,

}
export default Blog;