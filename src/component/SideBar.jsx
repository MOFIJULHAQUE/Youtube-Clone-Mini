import React, { useEffect, useState } from "react";
import axios from "axios";
import Explore from "./Aside_sections/Explore";
// import Sliderr from "../component/MainContent/Sliderr";
// import Slider from "react-slick";

import "./sidebar.css";
// import imagg1 from "../ima-ge/im (1).jpg";

import { Link } from "react-router-dom";

const SideBar = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json"
      )
      .then((res) => setMyData(res.data.data))
      // console.log(res.data))
      .catch((error) => {
        setIsError(error.message);
        // console.log(error);
      });
  }, []);

  // const getApidata= async()=>{
  //   try{
  // const res=await axios.get("https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json");
  // setMyData(res.data)
  //   }catch{

  //   }
  // }

  // useEffect(()=>{
  // getApidata();
  // },[])



  return (
    <>
      <div className="container">
        <div className="side_bar">
          <div className="under_sidebar">
            <div className="aside aside_1">
              <i class="fa-solid fa-house"></i>
              <div className="Home">
                <Link to="/"> Home</Link>
              </div>
            </div>
            <div className="aside">
              <i class="fa-solid fa-compass"></i>
              <div>
                <Link to="/Explore"> Explore</Link>
              </div>
            </div>
            <div className="aside">
              <i class="fa-solid fa-music"></i>
              <div>
                {" "}
                <Link to="/Music"> Music</Link>
              </div>
            </div>
            <div className="aside">
              <i class="fa-brands fa-youtube"></i>
              <div>
                {" "}
                <Link to="/Video"> Video</Link>
              </div>
            </div>
          </div>

          <hr />

          <div
            className="
          under_sidebar"
          >
            <div className="aside">
              <i class="fa-solid fa-house"></i>
              <div>
                <Link to="/"> Home</Link>
              </div>
            </div>
            <div className="aside">
              <i class="fa-solid fa-compass"></i>
              <div>
                <Link to="/Explore"> Explore</Link>
              </div>
            </div>
            <div className="aside">
              <i class="fa-solid fa-music"></i>
              <div>
                {" "}
                <Link to="/Music"> Music</Link>
              </div>
            </div>
            <div className="aside">
              <i class="fa-brands fa-youtube"></i>
              <div>
                {" "}
                <Link to="/Video"> Video</Link>
              </div>
            </div>
          </div>

          <hr />

          <div
            className="
          under_sidebar"
          >
            <div className="aside">
              <i class="fa-solid fa-house"></i>
              <div>Home</div>
            </div>
            <div className="aside">
              <i class="fa-solid fa-compass"></i>
              <div>Home</div>
            </div>
            <div className="aside">
              <i class="fa-solid fa-music"></i>
              <div>Home</div>
            </div>
            <div className="aside">
              <i class="fa-brands fa-youtube"></i>
              <div>Home</div>
            </div>
          </div>

          <hr />

          <div
            className="
          under_sidebar"
          >
            <div className="aside">
              <i class="fa-solid fa-house"></i>
              <div>Home</div>
            </div>
            <div className="aside">
              <i class="fa-solid fa-compass"></i>
              <div>Home</div>
            </div>
            <div className="aside">
              <i class="fa-solid fa-music"></i>
              <div>Home</div>
            </div>
            <div className="aside">
              <i class="fa-brands fa-youtube"></i>
              <div>Home</div>
            </div>
          </div>

          <hr />

          <div
            className="
          under_sidebar"
          >
            <div className="aside">
              <i class="fa-solid fa-house"></i>
              <div>Home</div>
            </div>
            <div className="aside">
              <i class="fa-solid fa-compass"></i>
              <div>Home</div>
            </div>
            <div className="aside">
              <i class="fa-solid fa-music"></i>
              <div>Home</div>
            </div>
            <div className="aside">
              <i class="fa-brands fa-youtube"></i>
              <div>Home</div>
            </div>

            <hr />

            <p>
              YouTube is an American online video sharing and social media
              platform headquartered in San Bruno, California. It was launched
              on February 14, 2005,YouTube is a website designed for sharing
              video. Millions of users around the world have created accounts on
              the site that allow them to upload videos that ...
            </p>
          </div>
        </div>

        <div>
          <div>
            {isError !== "" && <h2>{isError}</h2>}
            <div className="main">
              {myData.map((post) => {
                const { id, crawled_at, title, url, poster, directed_by } =
                  post;

                return (
                  <div className="content-section" key={id}>
                    <div className="content">
                      <img src={poster} alt="img1" />
                      <div className="under_content">
                        <div className="Channel_logo">
                          <img src={poster} alt="img1" />
                        </div>
                        <div>
                          <h3>{title.toUpperCase()}</h3>
                          <div>
                            <h5>
                              <a href={url}>{url}</a>
                            </h5>
                          </div>

                          <div className="TotalViews_UploadTime">
                            <div>
                              <h5> {crawled_at}</h5>
                            </div>
                            <div>
                              <h5>-</h5>
                            </div>
                            <div>
                              <h5>{directed_by}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Explore />
    </>
  );
};

export default SideBar;
