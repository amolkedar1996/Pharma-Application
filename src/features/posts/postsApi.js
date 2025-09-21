import axios from "axios";

const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("res",res);
    return res.data;
}

export {getPosts};