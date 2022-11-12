import { Formik, Form, Field, ErrorMessage } from 'formik';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserCredential, removeUserCredential } from '../features/user/userCredSlices';
export function SignupBox() {
    const router = useRouter();
    const userCred = useSelector((state) => state.userCred.value)
    const dispatch = useDispatch()
    return (<Formik

        initialValues={{ email: '', password: '' }}

        onSubmit={(values, { setSubmitting }) => {
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCred) => {
                    console.log("user : ", userCred);
                    dispatch(saveUserCredential(userCred))
                    router.push('/profile');
                }).catch((error) => {
                    console.log(error);
                    alert(error);
                });
            setSubmitting(false);
        }}

    >

        {({ isSubmitting }) => (

            <Form className="flex flex-col justify-center items-center border-radius-[15px]">
                <div className='flex mb-4  flex-col gap-2'>
                    <label className='self-start'> Email</label>
                    <Field type="email" name="email" label="email" className="border rounded p-1" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div className='flex mb-4  flex-col gap-2'>
                    <label className='self-start'> Password</label>
                    <Field type="password" name="password" className="border rounded p-1" />

                    <ErrorMessage name="password" component="div" />
                </div>
                <div className='flex mb-4  flex-col gap-2'>
                    <label className='self-start'> Verification password</label>
                    <Field type="password" name="confirm_password" className="border rounded p-1" />

                    <ErrorMessage name="confirm_password" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-blue-600 rounded text-white p-2 mb-4">

                    SignUp

                </button>

            </Form>

        )}

    </Formik>);

}
