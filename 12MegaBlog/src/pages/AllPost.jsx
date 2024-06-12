import React from "react";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";
import { useEffect,useState } from "react";
import appwriteService from "../appwrite/config";

// function AllPost(){
//     const [posts,setPosts] = useState([]) //here we will retrive the document and store it in the posts array 
//     useEffect(()=>{
//         appWriteService.getPosts([]).then((posts)=>{
//             if(posts){
//                 setPosts(posts.documents)
//                 // console.log("list of documents",posts.documents)
//             }
//         })
//     },[])
//     // posts.map((post)=>{
//     //     console.log({...post})
//     // })
//     return (
//         <div>
//             <Container>
//                 {posts.map((post)=>{
                  
//                     <div key={post.$id} className="p-2 w-1">
//                             <PostCard {...post}/>   
//                     </div>
//                 })
//                 }
//             </Container>
//         </div>
//     )
// }
// //the post that we have retrived fromt he data base appwrite servie is essentially the array of the post 
// //now we need to loop throught that array and take each individual post and pass it to the PostCard
// //now please take a close look at how you impemented the PostCard function 


// export default AllPost


function AllPosts() {
    const [posts, setPosts] = useState([])
    const [imageId,setImageId]=useState('')
    useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
            setImageId(posts.documents[0].featuredImage)
            console.log("These are imags",posts.documents[0].featuredImage)
        }
    })}, [])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts