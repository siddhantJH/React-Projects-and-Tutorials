import React from "react";
import { useEffect,useState } from "react";
import Container from "../components/container/Container";
import Postform from "../components/PostForm";
import appWriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router";



function EditPost(){
    //use params is required to fetch the value from the url
    const [posts,setPosts] =useState([])
    //now since we are editing the post we need to find the specific id so we will get it form the url which we will call as slug
    const {slug} =  useParams();
    const navigate =  useNavigate()
  useEffect(()=>{
    if(slug)
        {
            appWriteService.getPost(slug).then((post)=>{
                if(post)
                    {
                        setPosts(post)
                    }
            })
        }
  },[slug,navigate])
  return post ? (
    <div>
        <Container>
            <Postform/>
        </Container>
    </div>
  ): null
}
export default EditPost