import { useDispatch } from 'react-redux';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from 'redux/auth/authOperations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  // const onFinish = values => {
  //   console.log('Received values of form: ', values);
  // };
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <>
    <h2>Registration</h2>
    <RegisterForm initialValues={initialValues} onFinish={handleSignup} />
    </>
  );
};

export default RegisterPage;
