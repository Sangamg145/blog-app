import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import post from "../store/action/post";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const [value, setValue] = useState("");
  const [option, setOption] = useState("art");
  const [title, setTitle] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const posts = useSelector((state) => state.post?.post);
  const handleSubmit = () => {
    const data = new FormData();
    data.append("title", title);
    data.append("post", value);
    data.append("category", option);
    data.append("image", imgFile);
    dispatch(post.addPost(data, navigate));
  };
  console.log('object',option);
  return (
    <div style={{padding:16}}>
      Title for the Post:
       <input type="text" name="username" placeholder="Enter post title here..."
         value={title}
         onChange={(e) => setTitle(e.target.value)}
        style={{border:'1px solid teal',marginLeft:16,width:400}}
         className="form-control" />
      <br />
      <br />
      Title for the Post:
      <select
       value={option}
         onChange={(e) => setOption(e.target.value)}
       style={{border:'1px solid teal',marginLeft:16,width:400}}
         className="form-control" >
      <option value="art">Art</option>
      <option value="science">Science</option>
      <option value="tech">Tech</option>
      <option value="design">Design</option>
      <option value="food">Food</option>
      </select>
      <br />
      <br />
      Pick image for the Post:
      <input
          type="file" onChange={(e) => setImgFile(e.target.files[0])}
          className="form-control"
        />
      <br />
      <br />
      <br />
      <ReactQuill theme="snow" value={value} onChange={setValue} />

      <button type="submit" onClick={handleSubmit} className="btn" style={{width: 300,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%'}}>
        Create Post
      </button>
      <br /> <br />
    </div>
  );
}
