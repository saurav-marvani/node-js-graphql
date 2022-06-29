# Author: Saurav R.
# Website: https://saurav-r.vercel.app
# Instagram: www.instagram.com/raj_saurav___/
# LinkedIn: www.linkedin.com/in/saurav-r-35899b23a            

# Try this in Apollo Studio


 query {

    getAllPosts {
      id
      title
      description
    }
    
    getPost(id: "62bb006e85bc11156e48b13c") {
      id
      title
      description
    }
  
}

 mutation {

    createPost(post: {
       title: "this is first post"
       description: "this is description"
    }){
        id
        title
        description
    }

    updatePost(id: "62bb00fa85bc11156e48b140", post: {
        title: "👋 💍 💦"
    }){
        id 
        title
        description
    }

    deletePost(id: "62bb00fa85bc11156e48b140")
}