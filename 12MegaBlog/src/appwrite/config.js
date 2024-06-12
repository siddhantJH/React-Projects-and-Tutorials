// //major configuration for appwrite 

// import conf from "../conf/conf";
// import { Client,ID,Databases,Storage,Query } from "appwrite";

// //Structure of the database (Columns Attributes)
// // title
// // content 
// // featuredImage
// // status 
// // userId




// export class Service{

//     client = new Client();
//     databases;
//     storage;
//     bucket;
//     constructor(){
//         this.client
//         .setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwriteProjectId);
//         this.databases=new Databases(this.client);
//         this.storage=new Storage(this.client); 
//     }
//     //now inorder to create a post and store it in database we need to be familiar with how the 
//     //documents are stored in databases
//     async createPost({title,slug,content,featuredImage,status,userId}){
//         try{
//             //we are usign slug as doc id , essentilally required to pass on the index 
//                 return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
//                     title,
//                     content,
//                     featuredImage,
//                     status,
//                     userId
//                 });
//         }catch(error)
//         {   
//             console.log(error)
//         }
//     }

//     async updatePost(slug,{title,content,featuredImage,status,userId}){
//         try{
//             return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{title,content,featuredImage,status,userId});
//         }catch(err)
//         {
//             console.log(err)
//         }
//     }

//     async deletePost(slug){
//         try{
//             await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
//             return true;
//         }catch(err)
//         {
//             console.log(err)
//             return false;
//         }
//     }

//     async getPost(slug)
//     {
//         try{
//             return await this.databases.getDocumentconf(conf.appwriteDatabaseId,conf.appwriteDatabaseId,slug)
//         }catch(err)
//         {
//             console.log(err)
//             return false
//         }
//     }
//     async getPosts(queries = [Query.equal("status","active")]){   //we can pass queries inside the square brackets, index hoga tabhi query run hoga
//         try{
//             return await this.databases.listDocuments(conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,queries
//             ) //just pass the querires that we have used in the databases 
//         }catch(err)
//         {
//             console.log(err)
//         }
//     }
//     //file upload method 
//     //we need to pass the file , file ka blob dena hai actual file ka
//     async uploadFile(file){
//         try{
//             return await this.bucket.createFile(conf.appwriteBucketId,ID.unique,file) //ye jo file hai ye hai blob essentially ,ye id return karega 
//         }catch(err)
//         {
//             console.log(err)
//             return false
//         }
//     }
//     async deleteFile(fileId)
//     {
//         try{
//             await this.bucket.deleteFile(conf.appwriteBucketId,fileId);
//         }catch(err)
//         {
//             console.log(err)
//         }
//     }
//     getFilePreview(fileId){   //this return url of image based on the fileId
//         return this.bucket.getFilePreview(
//             conf.appwriteBucketId,
//             fileId
//         )
//     }
// }



// const service = new Service()
// export default service



import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost(data) {
        console.log("Data received:", data);
        let { title, content, slug, featuredImage, status, userId } = data;
        
        // Log each variable to ensure they are correctly set
        //the variable name here should be same as that of th evariable name mentioned in the database exact match the spelling 
        //while destructuring the data received form the data we have received userId but insted int eh database 
        //we have saved the id as userID so we need to store the userId in the cariable userID and then pass tge object in the createDocument 
        console.log("Title:", title);
        console.log("Content:", content);
        console.log("Slug:", slug);
        console.log("Featured Image:", featuredImage);
        console.log("Status:", status);
        console.log("User ID:", data.userId);
        let userID=data.userId
        try {
            // Log the document structure before creating it
            let documentStructure = { title, content, featuredImage, status, userID };
            console.log("Document structure:", documentStructure);

            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, documentStructure);
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service