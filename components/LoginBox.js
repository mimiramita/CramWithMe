import { Formik, Form, Field, ErrorMessage } from 'formik';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserCredential, removeUserCredential } from '../features/user/userCredSlices';
export function LoginBox() {
    const router = useRouter();
    const userCred = useSelector((state) => state.userCred.value)
    const dispatch = useDispatch()
    return (<Formik

        initialValues={{ email: '', password: '' }}

        onSubmit={(values, { setSubmitting }) => {
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCred) => {
                    console.log(userCred);
                    dispatch(saveUserCredential(userCred))
                    router.push('/profile');
                }).catch((error) => {
                    console.log("Error : ", error);
                    alert(error);
                });

            setSubmitting(false);

        }}

    >

        {({ isSubmitting }) => (

            <Form className="flex flex-col justify-center items-center border-radius-[15px]">
                <div className="flex mb-4  flex-col gap-2">
                    <label> Email </label>
                    <Field type="email" name="email" className="border rounded p-1" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div className='flex mb-4  flex-col gap-2'>
                    <label> Password </label>
                    <Field type="password" name="password" className="border rounded p-1" />
                    <ErrorMessage name="password" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white p-2 rounded mb-4">

                    LogIn

                </button>

            </Form>

        )}

    </Formik>);
}
