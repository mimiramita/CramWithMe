import { useState, useEffect } from "react";
import styles from "../styles/profile.module.css";
import { getUserData } from "../firebase";
import Link from 'next/link';

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
      <div class="card" style={{ height: "35rem", width: "70rem" }}>
        <div class="card-body" style={{ height: "100%", width: "70rem" }}>
          <span>
            <h1 style={{ textAlign: "center" }}>{data.name}</h1>
            <Link href="/edit">
              <img style={{float: "right", marginTop: "-50px", marginRight: "5px", width: "30px"}} src="/favicon2.ico"></img>
            </Link>
          </span>
          <br></br>
          <br></br>
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-sm-5 justify-content-center">
                <img
                  src="/20.jpg"
                  style={{ display: "block", margin: "auto", width: "20rem" }}
                  className={styles.profile}
                  alt="..."
                ></img>
              </div>
              <div class="col-sm-7">
                <p>College: {data.college}</p>
                <p>Gender: {data.gender}</p>
                <p>Interests: {data.interests}</p>
                <p>Major: {data.major}</p>
                <p>Year: {data.year}</p>
                <p>Current Classes: {data.currentClasses}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
