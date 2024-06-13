


import { conf } from "../components/conf/conf";
import { Client,Account,ID, Databases,Storage,Query } from "appwrite";



export class DBservice{

    client=new Client()
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client)
    }
    //upload post 


    //create post 


    //delete post 
}