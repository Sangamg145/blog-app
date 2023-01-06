import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import post from "../store/action/post";
import ReactQuill from "react-quill";
import Loader from "../Components/Loader";
export default function Home() {
  const id = useLocation().search;
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post?.post);
  useEffect(() => {
    dispatch(post.getPost(id.slice(1)));
  }, [id]);
// console.log('object',posts.data.data);
  return (
    <>
    {
      posts.loading?
      <Loader />
      :
      posts?.data?.data?.length===0?
      <h2 style={{textAlign:'center',margin:'15%'}}>No post available</h2>
      :
      <>
      {posts?.data?.data.map((i, index) => (
        <>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              padding: "32px 6%",
            }}
          >
            <div
              style={{ display: "flex", flex: 0.6, flexDirection: "column" }}
            >
              <h1 style={{ marginLeft: 16 }}>{i?.title}</h1>
              <p
                style={{
                  lineHeight: "1.5em",
                  height: "15em",
                  overflow: "hidden",
                  // white-space: nowrap;
                  textOverflow: "ellipsis",
                  width: "100%",
                  position: "relative",
                }}
              >
                <ReactQuill value={i.post} readOnly={true} theme={"bubble"} />
                <div class="fadeout"></div>
              </p>

              <Link
                to={`/post/${i._id}`}
                style={{ width: 120, marginTop: 20, marginLeft: 16 }}
              >
                <button type="submit" className="btn">
                  Read more
                </button>
              </Link>
            </div>
            <div style={{ display: "flex", flex: 0.4 }}>
              <img
                style={{ width: 500, height: 300 }}
                src={`http://localhost:5000/images/${i.image}`}
              />
            </div>
          </div>
        </>
      ))}
      </>
    }
      
    </>
  );
}
