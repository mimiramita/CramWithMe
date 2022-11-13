import { Formik, Form, Field, ErrorMessage } from "formik";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  saveUid,
  saveEmail,
  savePhoto,
  clearUserCredential,
} from "../features/user/userCredSlices";
import { setCookie } from 'cookies-next'
export function SignupBox() {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCred) => {
            console.log("user : ", userCred);
            dispatch(saveUid(userCred.user.uid));
            dispatch(saveEmail(userCred.user.email));
            dispatch(savePhoto(userCred.user.photoURL));
            setCookie("uid", userCred.user.uid)
            router.push("/profile");
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-border-radius-[15px]">
          <div className="tw-flex tw-mb-4  tw-flex-col tw-gap-2">
            <label className="tw-self-start"> Email</label>
            <Field
              type="email"
              name="email"
              label="email"
              className="tw-border tw-rounded tw-p-1 tw-bg-white"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="tw-flex tw-mb-4  tw-flex-col tw-gap-2">
            <label className="tw-self-start"> Password</label>
            <Field
              type="password"
              name="password"
              className="tw-border tw-rounded tw-p-1 tw-bg-white"
            />

            <ErrorMessage name="password" component="div" />
          </div>
          <div className="tw-flex tw-mb-4 tw-flex-col tw-gap-2">
            <label className="tw-self-start"> Verification password</label>
            <Field
              type="password"
              name="confirm_password"
              className="tw-border tw-rounded tw-p-1 tw-bg-white"
            />

            <ErrorMessage name="confirm_password" component="div" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="tw-bg-blue-600 tw-rounded tw-text-white tw-p-2 tw-mb-4"
          >
            SignUp
          </button>
        </Form>
      )}
    </Formik>
  );
}
