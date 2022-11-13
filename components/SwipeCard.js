import { useState, useEffect, useRef } from "react";
import styles from "../styles/profile.module.css";
import { getUserData } from "../firebase";
import Link from "next/link";
import { Overlay, Button } from "react-bootstrap";

export default function Swipe({ username }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [arr, setarr] = useState([
    "1Dcr1AfSowh2NBh3utI6GPmoWd83",
    "ORlEm1yG9FT0puO3kIXN8cqjB1y1",
  ]);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    setLoading(true);
    if (arr.length !== 0) {
      getUserData(arr[0]).then((data) => {
        setData(data);
      });
    }
    setLoading(false);
    console.log(arr);
  }, [arr]);

  if (isLoading) return <p></p>;
  if (!data) return <p></p>;

  // useEffect(() => {
  //   console.log(arr);
  // }, [arr]);
  const handleReject = () => {
    setarr(arr.slice(1, arr.length));
    if (arr.length !== 0) {
      getUserData(arr[0]).then((data) => {
        setData(data);
      });
    } else {
      setShow(!show);
    }
  };
  const handleAccept = () => {
    setarr(arr.slice(1, arr.length));
    setData(arr[0]);
  };

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
        <div
          class="card-body"
          style={{ height: "100%", width: "80%" }}
          ref={target}
        >
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
                onClick={handleReject}
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
                onClick={handleAccept}
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

      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "rgba(247, 181, 26, 0.9)",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              width: "70%",
              height: "50%",
              marginLeft: "-50%",
              marginTop: "-3%",
              fontFamily: "ZenMaruGothic",
              fontWeight: "lighter",
              textAlign: "center",
              ...props.style,
            }}
          >
            <Button
              onClick={() => setShow(!show)}
              style={{
                float: "right",
                backgroundColor: "rgba(247, 181, 26, 0)",
                border: "none",
                marginTop: "10px",
              }}
            >
              <img src="/close.png" style={{ width: "35px" }}></img>
            </Button>

            <p style={{ fontSize: "36px", marginTop: "50px" }}>
              Want to keep finding new people?
            </p>
            <p style={{ fontSize: "54px" }}>Consider Our Premium Package!</p>
            <p style={{ fontSize: "44px" }}>only 1.99$ per year</p>
          </div>
        )}
      </Overlay>
    </div>
  );
}
