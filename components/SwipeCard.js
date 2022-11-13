import { useState, useEffect } from "react";
import styles from "../styles/profile.module.css";
import { getUserData } from "../firebase";
import Link from "next/link";

export default function Swipe({ username }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserData(username).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <p></p>;
  if (!data) return <p></p>;

  return (
    <div className={styles.center}>
      <img
        src="/20.jpg"
        style={{
          display: "block",
          margin: "auto",
          width: "150px",
          height: "150px",
          position: "absolute",
          top: "20px",
          left: "50px",
        }}
        className={styles.profile}
        alt="..."
      ></img>
      <div
        class="card"
        style={{ position: "absolute", top: "30px", width: "60%" }}
      >
        <div class="card-body" style={{ height: "100%", width: "80%" }}>
          <div style={{ textAlign: "left", width: "120%" }}>
            <h1 ClassName={styles.profileName}>{data.name.toLowerCase()}</h1>
            <h3 ClassName={styles.profileUniversity}>
              university of massachusetts - amherst
            </h3>
          </div>
          <br></br>
          <br></br>
          <div class="container">
            <div class="row" style={{ height: "30px" }}>
              <div class="col-5" style={{ height: "200px" }}>
                year:
              </div>
              <div class="col-7" style={{ height: "200px" }}>
                {data.year.toLowerCase()}
              </div>
            </div>
            <div class="row" style={{ height: "30px" }}>
              <div class="col-5" style={{ height: "200px" }}>
                major:
              </div>
              <div class="col-7" style={{ height: "200px" }}>
                {data.major.toLowerCase()}
              </div>
            </div>
            <div class="row" style={{ height: "30px" }}>
              <div class="col-5" style={{ height: "200px" }}>
                current subjects:
              </div>
              <div class="col-7" style={{ height: "200px" }}>
                {data.currentClasses.toLowerCase()}
              </div>
            </div>
            <div class="row" style={{ height: "30px" }}>
              <div class="col-5" style={{ height: "200px" }}>
                interests:
              </div>
              <div class="col-7" style={{ height: "200px" }}>
                {data.interests.toLowerCase()}
              </div>
            </div>
          </div>
          <br></br>
          <div class="container">
            <div class="row" style={{ height: "30px" }}>
              <div class="col-5" style={{ height: "200px" }}>
                bio:
              </div>
              <div class="col-7" style={{ height: "200px" }}></div>
            </div>
          </div>
          <div
            class="container"
            style={{
              border: "solid black 0.5px",
              height: "90px",
              width: "125%",
              marginLeft: "10px",
            }}
          >
            {data.bio}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div style={{ width: "128%" }}>
            <span>
              <button
                type="button"
                class="btn btn-danger"
                style={{ width: "50%", borderRadius: "0", height: "32px" }}
              >
                <img
                  src="/book-2.png"
                  style={{
                    width: "20px",
                    marginTop: "-1px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
              </button>
              <button
                type="button"
                class="btn btn-success"
                style={{ width: "50%", borderRadius: "0", height: "32px" }}
              >
                <img
                  src="/book.png"
                  style={{
                    width: "25px",
                    marginTop: "-3px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
