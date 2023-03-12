import { useDispatch } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';
import { login} from '../../redux/auth/authOperations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (<>  <h2>Login</h2> <LoginForm initialValues={initialValues} onFinish={handleLogin}/> </>)
};
export default LoginPage;
