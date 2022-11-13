import { useState, useEffect } from "react";
import styles from "../styles/profile.module.css";
import { getUserData } from "../firebase";
import Link from "next/link";

export default function Profile({ username }) {
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
      <div
        class="card"
        style={{
          position: "absolute",
          top: "-10px",
          width: "60%",
          height: "100%",
        }}
      >
        <div class="card-body" style={{ height: "100%", width: "80%" }}>
          <div style={{ textAlign: "left", width: "120%" }}>
            <div class="row" style={{ height: "30px" }}>
              <div class="col-3" style={{ height: "200px" }}>
                <img
                  src="/20.jpg"
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "90px",
                    height: "90px",
                    position: "absolute",
                    top: "20px",
                    left: "50px",
                  }}
                  className={styles.profile}
                  alt="..."
                ></img>
              </div>
              <div class="col-9" style={{ height: "200px" }}>
                <br></br>
                <h2 ClassName={styles.profileName} style={{ fontSize: "40px" }}>
                  {data.name.toLowerCase()}
                </h2>
              </div>
            </div>
            <Link href="/edit">
              <img
                style={{
                  float: "right",
                  marginTop: "-30px",
                  marginRight: "-20px",
                  width: "30px",
                }}
                src="/favicon2.ico"
              ></img>
            </Link>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div
            class="container"
            style={{ marginLeft: "26px", fontSize: "20px" }}
          >
            <div class="row" style={{ height: "30px" }}>
              <div class="col-5" style={{ height: "200px" }}>
                name:
              </div>
              <div class="col-7" style={{ height: "200px" }}>
                {data.name.toLowerCase()}
              </div>
            </div>
            <div class="row" style={{ height: "30px" }}>
              <div class="col-5" style={{ height: "200px" }}>
                pronouns:
              </div>
              <div class="col-7" style={{ height: "200px" }}>
                {data.gender.toLowerCase()}
              </div>
            </div>
            <div class="row" style={{ height: "30px" }}>
              <div class="col-5" style={{ height: "200px" }}>
                school:
              </div>
              <div class="col-7" style={{ height: "200px" }}>
                {data.college.toLowerCase()}
              </div>
            </div>
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
            <div class="row" style={{ height: "30px" }}>
              <div class="col-5" style={{ height: "200px" }}>
                phone number:
              </div>
              <div class="col-7" style={{ height: "200px" }}>
                {data.phoneNumber}
              </div>
            </div>
            <div class="row" style={{ height: "30px" }}>
              <div class="col-5" style={{ height: "200px" }}>
                email:
              </div>
              <div class="col-7" style={{ height: "200px" }}>
                {data.email}
              </div>
            </div>
          </div>
          <br></br>
          <div
            class="container"
            style={{ marginLeft: "26px", fontSize: "20px" }}
          >
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
              height: "100px",
              width: "110%",
              marginLeft: "40px",
            }}
          >
            {data.bio}
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
