import React from "react";
import appwriteService from "../appwrite/config" //ya to service use kre ya to redux for url finding of the post image
import {Link} from 'react-router-dom'

//pure card ko agar clickable banana hai to plese wrap it under a link 
//Link pe pura url nai dena padta jaha pe ho waha se aage ja sakte ho 
// function PostCard({$id,title,featuredImage}){
//     //in post card we are getting the value in destructured manner ,
//     //and values are passed as post , to waha pe value agar destructed way me le rahe hai 
//     //to yaha value bhi destructured way me deni  padega 
//     // console.log("id",id);
//     // console.log("title",title)
//     // console.log("featured",featuredImage)
//     return (
//         <>
//             <Link to={`/post/${$id}`}>
//             <div className="w-full bg-gray-100 rounded-xl p-4">'
//                 <div className="w-full justify-center mb-4">
//                     <img src={`${appwriteService.getFilePreview(featuredImage)}`}  alt={title}
//                 className='rounded-xl' />
//                 </div>
//                 <h2 className='text-xl font-bold'>{title}</h2>
//             </div>
//             </Link>
//         </>
//     )
// }

// export default PostCard


function PostCard({$id, title, featuredImage}) {
    console.log(featuredImage)
    return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-gray-100 rounded-xl p-4'>
              <div className='w-full justify-center mb-4'>
                  <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                  className='rounded-xl' />
  
              </div>
              <h2
              className='text-xl font-bold'
              >{title}</h2>
          </div>
      </Link>
    )
  }
  
  
  export default PostCard