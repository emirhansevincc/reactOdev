import axios from "axios";

async function getData(user_id){

    let {data:users} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);
    let {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)

    console.log("users: ", users, "posts: ",posts);

}

export default getData