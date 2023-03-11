import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import UserRoutes from './UserRoutes';
import { Layout, Space } from 'antd';

import { HeaderStyled, ContentStyled, FooterStyled } from './App.slyled';

export const App = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Layout>
          <HeaderStyled>
            <Navbar />
          </HeaderStyled>
          <ContentStyled>
            <UserRoutes />
          </ContentStyled>
          <FooterStyled>Footer</FooterStyled>
        </Layout>
      </BrowserRouter>
    </Space>
  );
};
