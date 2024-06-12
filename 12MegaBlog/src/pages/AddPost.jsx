import React from "react";
import Postform from "../components/PostForm";
import Container from "../components/container/Container";


function AddPost()
{
 return (
    <div className="py-8">
        <Container>
            <Postform/>
        </Container>
    </div>
 )
}

export default AddPost