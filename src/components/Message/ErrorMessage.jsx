
import { message } from 'antd';
import { useEffect } from 'react';


const ErrorMessage = () => {

  const [messageApi, contextHolder] = message.useMessage();


  const errorMessage = () => {
    messageApi.error({
      type: 'error',
      content: 'Incorrect data, try again now',
    });
  };
useEffect(() => {
  errorMessage();
})
return  (<>{contextHolder}</> )

}

export default ErrorMessage
