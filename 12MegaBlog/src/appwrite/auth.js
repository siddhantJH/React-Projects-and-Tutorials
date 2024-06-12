// import conf from "../conf/conf";
// import { Client,Account,ID } from "appwrite";


//class banao aur export kardo aur is class ko jo bhi use karega
// use object banana padega so better is to directly export a method 
// export class AuthService{
//     client = new Client();
//     account;
//     constructor(){
//         this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
//     }
//     //async because we dont want to mode ahead before making account
//     async createAccount({email,password,name})
//     {
//             try{
//                const userAccount = await this.account.create(ID.unique(),email,password,name);
//                if(userAccount){ 
//                 //we are trying to call another method from here 
//                 //actully hamara jo  flow hai vo aisa hai ki agar user account exist karta hai 
//                 //to usko login bhi karwa hi do 
//                 return this.login({email,password}) //agar user account ban gaya hai to direct login kar do 
//                }else{
//                 return userAccount;
//                }
//             }catch(error){
//                 throw error
//             }
//     }

//     async login({email, password}) {
//         try {
//             return await this.account.createEmailSession(email, password);
//         } catch (error) {
//             throw error;
//         }
//     }
//     //what if somewone directly tries to land in the home page so we have to make sure that the user is logged in or not
//     //we can straightway ask the account variable
//     //to vo bata dega account hai ya nahi hai us session ke andar  
//     async getCurrentUser(){
//         try{
//            return await this.account.get() //jo bhi value milegi return it 
//         }catch(err)
//         {
//             console.log("Appwrite error", err)
//         }
//         return null //suppose try catch pe bhi kuch error aa gai 
//     }

//     async logout(){
//         try{
//             await this.account.deleteSessions();
//         }catch(err){
//             throw err
//         }
//     }
// }

// const authService=new AuthService();

// export default authService;


//kal ko agar koi application backend service change ghoti hai to sirf yahi file pe changes hongi 
//we could use this code snippet in future in anyother project 


import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService