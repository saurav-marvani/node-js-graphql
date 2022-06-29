# Author: Saurav R.
# Website: saurav-r.vercel.app
# SocialMedia: Instagram: raj_saurav___
              

# sTry this in Apollo Studio


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