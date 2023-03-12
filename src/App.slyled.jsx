import styled from '@emotion/styled';

import { Layout } from 'antd';
const { Header, Content } = Layout;

// export const Wrapper = styled.div`
//   max-width: 400px;
//   margin-right: auto;
//   margin-left: auto;
// `;

export const HeaderStyled = styled(Header)`
  text-align: center;

  height: 60px;
  padding-inline: 50px;
  line-height: 64px;
  background-color: #ffffff;
`;

export const ContentStyled = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 60px);
  color: #000000;
  background-color: rgb(221 221 221 / 20%);
`;

