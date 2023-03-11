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
    console.log(data);
    dispatch(signup(data));
  };

  return (
    <RegisterForm initialValues={initialValues} onFinish={handleSignup} />
    // <div className="container">
    //     <h1 className="page-title">Register page</h1>
    //     <RegisterForm onSubmit={handleSignup} />
    // </div>
  );
};

export default RegisterPage;
