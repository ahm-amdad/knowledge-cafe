
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
   const handleAddToBookmark = blog =>{
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
    
   }
   const [marksasRead, setMarkasRead] =useState(0);
   const handleMarkeasRead = time =>{
     const newmarkasRead = marksasRead + time;
     setMarkasRead(newmarkasRead);
   }

  return (
    <>
    
      <Header></Header>
      <hr className='max-w-7xl mx-auto' />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        handleMarkeasRead={handleMarkeasRead} >
        </Blogs>
        <Bookmarks 
        marksasRead={marksasRead}
        bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
