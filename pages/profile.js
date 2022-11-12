import { useSelector } from "react-redux"
export default function Profile() {
    const uid = useSelector((state) => state.userCredReducer.uid)
    const email = useSelector((state) => state.userCredReducer.email)
    const photoURL = useSelector((state) => state.userCredReducer.photoURL)
    // const states = useSelector((state) => state)
    // console.log(states)
    return (<div>
        {uid} <br />
        {email} <br />
        {photoURL} <br />
    </div>)
}