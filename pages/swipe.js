import Head from "next/head";
import styles from "../styles/Home.module.css";
import Swipe from "../components/SwipeCard";
import { writeUserData } from "../firebase";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [arr, setarr] = useState([
    { name: "Jane" },
    { name: "John" },
    { name: "Claire" },
    { name: "Jen" },
  ]);
  useEffect(() => {
    console.log(arr);
  }, [arr]);
  const handleReject = () => {
    setarr(arr.slice(0, -1));
  };
  const handleAccept = () => {
    setarr(arr.slice(0, -1));
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.testFont}>
        <nav
          class="navbar"
          style={{
            width: "195%",
            marginLeft: "-35px",
            marginTop: "-20px",
            backgroundColor: "white",
          }}
        >
          <a class="navbar-brand" href="#">
            <img
              src="/logo.jpg"
              style={{ width: "180px", marginLeft: "5px" }}
            ></img>
          </a>
          <span class="d-flex">
            <Link href="/profile">
              <button class="btn" type="submit">
                <img src="/user.png" style={{ width: "40px" }}></img>
              </button>
            </Link>
          </span>

          <img
            src="/home2.png"
            style={{ width: "100px", float: "right" }}
          ></img>
        </nav>
        <div
          style={{
            height: "75%",
            width: "90%",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            margin: "auto",
          }}
        >
          <Swipe username="jkelly"></Swipe>
        </div>
      </main>
    </div>
  );
}

// import { useSelector } from "react-redux"
// export default function Profile() {
//     const uid = useSelector((state) => state.userCredReducer.uid)
//     const email = useSelector((state) => state.userCredReducer.email)
//     const photoURL = useSelector((state) => state.userCredReducer.photoURL)
//     // const states = useSelector((state) => state)
//     // console.log(states)
//     return (<div>
//         {uid} <br />
//         {email} <br />
//         {photoURL} <br />
//     </div>)
// }