import { conf } from "../components/conf/conf";
import {Client, Account,ID} from 'appwrite';



export class AuthService{
    client=new Client()
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client)
    }

    //to sign in to the account we will use thuis function 
    //this function basically helps us create or signin to the account 
    async CreateAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            //returns us the json object of user
            if(userAccount)
            {
                return await this.account.login({email,password})
            }else{
                return userAccount
            }
        }catch(error){
            console.log("Appwrite Error",error)
        }
    }
    //this returns the current session object 
    async login({email,password})
    {
        try{
            //this returns the session object this keeps track of user session etc
            return await this.account.createEmailPasswordSession(email,password)
        }catch(error){
            console.log("Appwrite Error",error)
        }
    }

    //gives the object of the current user who is logged in 
    async getCurrentUser(){
        try{
            return await this.account.get()
        }catch(error)
        {
            console.log("Appwrite Error",error)
        }
    }
    //deletes the current session
    async logout(){
        try{
           return await this.account.deleteSession();
        }catch(error)
        {
            console.log("Appwrite Error",error)
        }
    }
}



const authservice = new AuthService()
export default authservice