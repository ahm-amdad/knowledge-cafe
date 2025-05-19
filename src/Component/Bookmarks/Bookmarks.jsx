

const Bookmarks = ({bookmarks,marksasRead}) => {
    return (

         <div className="md:w-1/3 ">
            <div className="rounded-md font-bold text-center text-[20px] p-4 ml-5 my-3 p-5 bg-[#EFEDFD]">
                <h3>Spent time on read : {marksasRead}   min</h3>
            </div>

            <div className="h-full rounded-t-md bg-[#DEDDD9]  p-4 ml-5 text-center mt-5">

                <h3 className="text-3xl font-bold p-5 bg-slate-50">Bookmarks Blog:{bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark,idx) => <div key={idx} className="rounded-md  my-3 p-6 bg-[white]">{bookmark}</div>)
                }
            </div>
         </div>
    );
};

export default Bookmarks;