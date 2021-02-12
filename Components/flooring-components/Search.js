import { Button, Col, Row, Select } from 'antd';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import { FLOORING_SEARCH } from '../../static/constants';
import styled from 'styled-components';
const StyledSelect = styled(Select)`
  width: 110px;
`;
const SelectWrapper = styled.div`
  margin-left: 30px;
  display: inline;
`;
const Label = styled.label`
  margin-right: 10px;
`;
const { Option } = Select;
const FlooringItem = () => {
  return (
    <Row gutter={[10, 25]}>
      <Col>
        <Button type="primary" size="medium" icon={<PlusOutlined />}>
          {FLOORING_SEARCH.ADD_NEW}
        </Button>
      </Col>
      <Col>
        <SelectWrapper>
          <Label>{FLOORING_SEARCH.FILTER.LABEL}</Label>
          <StyledSelect defaultValue={FLOORING_SEARCH.FILTER.DEFAULT_VALUE}>
            {Array.isArray(FLOORING_SEARCH.FILTER.OPTION) &&
              FLOORING_SEARCH.FILTER.OPTION.map((item) => (
                <Option key={item.value} value={item.value}>
                  {item.title}
                </Option>
              ))}
          </StyledSelect>
        </SelectWrapper>
        <SelectWrapper>
          <Label>{FLOORING_SEARCH.SORT.LABEL}</Label>
          <StyledSelect defaultValue={FLOORING_SEARCH.SORT.DEFAULT_VALUE}>
            {Array.isArray(FLOORING_SEARCH.SORT.OPTION) &&
              FLOORING_SEARCH.SORT.OPTION.map((item) => (
                <Option key={item.value} value={item.value}>
                  {item.title}
                </Option>
              ))}
          </StyledSelect>
        </SelectWrapper>
      </Col>
    </Row>
  );
};

export default FlooringItem;
