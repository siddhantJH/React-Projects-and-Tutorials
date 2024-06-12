const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf

//benifit of this is mai ab hamesha conf se dot lagakar value lunga aur mujhe hamesha string value milegi 
//kyoki kabhi kabhi jo id hame mili hai kyoki id kabh kabhi numbers me milti hai au aloha numerix nai hua to vo interger me confuse ho sakta hai 




