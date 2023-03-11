import styled from '@emotion/styled';

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

// export const Wrapper = styled.div`
//   max-width: 400px;
//   margin-right: auto;
//   margin-left: auto;
// `;

export const HeaderStyled = styled(Header)`
  text-align: center;
  /* color: #fff; */
  height: 64;
  padding-inline: 50;
  line-height: 64px;
  background-color: #ffffff;
`;

export const ContentStyled = styled(Content)`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  height: auto;
  height: 100%;
  color: #000000;
  background-color: rgb(221 221 221 / 20%);
`;

export const FooterStyled = styled(Footer)`
  text-align: center;
  color: '#fff';
  background-color: '#7dbcea';
`;
