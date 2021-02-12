import React from 'react';
import { Layout } from 'antd';
const Footer = Layout;
import { FOOTER } from '../../static/constants';
const MyFooter = () => {
  return <Footer className="text-center margin-bottom-20">{FOOTER.COPY_RIGHT}</Footer>;
};

export default MyFooter;
