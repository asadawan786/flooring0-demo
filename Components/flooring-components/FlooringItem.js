import { Card, Skeleton, Tag } from 'antd';
import { CodeSandboxOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import React from 'react';

const ActionLink = styled.a`
  text-decoration: none;
  color: #8c8c8c;
`;
const StyledTag = styled(Tag)`
  float: left;
`;
const StyledSkeleton = styled(Skeleton)`
  padding: 10px;
`;
const StyledParagraph = styled.p`
  clear: both;
`;

const PriceWrapper = styled.div`
  float: left !important;
`;
const ActionButtonWrapper = styled.div`
  float: right !important;
  margin-top: 5px;
`;
const Price = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const ActionButton = ({ icon }) => {
  return (
    <>
      <ActionLink> {icon}</ActionLink>
    </>
  );
};

const FlooringItem = ({ item, loading }) => {
  return (
    <>
      <Card
        cover={
          !loading ? (
            <img alt={item.imageLabel} src={item.imagePath} />
          ) : (
            <StyledSkeleton loading={loading} avatar active />
          )
        }
        size="small">
        {!loading && (
          <div>
            <StyledTag color="cyan">{item.tag}</StyledTag>
            <StyledParagraph>{item.description}</StyledParagraph>
            <PriceWrapper>
              <label key="label">
                $<Price>{item.price}</Price>/{item.pricePart}
              </label>
            </PriceWrapper>
            <ActionButtonWrapper>
              <ActionButton icon={<CodeSandboxOutlined key="setting" />} />
              <ActionButton icon={<EditOutlined key="edit" />} />
            </ActionButtonWrapper>
          </div>
        )}
      </Card>
    </>
  );
};

export default FlooringItem;
