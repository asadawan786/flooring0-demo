import { Component } from 'react';
import FlooringItem from '../components/flooring-components/FlooringItem';
import { Card, Tabs, Row, List } from 'antd';
import { FLOORING } from '../static/fake-constants';
import Search from '../components/flooring-components/Search';
import { FLOORING_MAIN } from '../static/constants';
import styled from 'styled-components';
const { TabPane } = Tabs;

const StyledCard = styled(Card)`
  padding: 0;
`;

class FlooringMain extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        <StyledCard title={FLOORING_MAIN.TITLE}>
          <Tabs defaultActiveKey="tab2" onChange={this.callback}>
            <TabPane
              tab={FLOORING_MAIN.TABS_CHILD.TAB_ONE.title}
              key={FLOORING_MAIN.TABS_CHILD.TAB_ONE.key}></TabPane>
            <TabPane
              tab={FLOORING_MAIN.TABS_CHILD.TAB_TWO.title}
              key={FLOORING_MAIN.TABS_CHILD.TAB_TWO.key}>
              <Search />
              <Row gutter={[20, 20]}>
                {/* Ali here you need to use List component and pass flooring as cart item to list  */}
                <List
                  grid={{
                    gutter: 24,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 5,
                    xxl: 6
                  }}
                  dataSource={FLOORING}
                  renderItem={(item) => (
                    <List.Item>
                      <FlooringItem item={item} loading={loading} />
                    </List.Item>
                  )}
                />
              </Row>
            </TabPane>
          </Tabs>
        </StyledCard>
      </>
    );
  }
}

export default FlooringMain;
