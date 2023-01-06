import React from "react";
import { Link, useParams } from "react-router-dom";
import post from "../store/action/post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import Loader from "../Components/Loader";
export default function Post() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postOnly = useSelector((state) => state.post?.postOnly);
  useEffect(() => {
    if (id) {
      dispatch(post.getPostOnly(id));
    }
  }, [id]);
  return (
    <>
      {postOnly.loading ? (
        <Loader />
      ) : (
        <>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                // flex: 0.6,
                flexDirection: "column",
                padding: "32px 6%",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src={`http://localhost:5000/images/${postOnly?.data?.data?.image}`}
                  style={{ height: 400, width: "100%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 14,
                  justifyContent: "flex-end",
                }}
              >
                <Link to="/create-post">
                  <img
                    src="https://www.pngkey.com/png/full/202-2022557_edit-comments-edit-icon-png.png"
                    style={{ height: 28, width: 28, cursor: "pointer" }}
                  />
                </Link>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                  style={{ height: 29, width: 29, cursor: "pointer" }}
                />
              </div>
              <h1>{postOnly?.data?.data?.title}</h1>
              <ReactQuill
                value={postOnly?.data?.data?.post}
                readOnly={true}
                theme={"bubble"}
              />
            </div>
            {/* <div style={{ display: "flex", flex: 0.4,flexDirection:'column' }}>
    {
      [1,2,3,4].map(()=>
      <div style={{width:'100%'}}>
         <img src="https://images.indianexpress.com/2018/12/foodporn-759.jpg?w=389" />
      </div>
      )
    }
   
  </div> */}
          </div>
        </>
      )}
    </>
  );
}
