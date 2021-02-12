import React from 'react';
import { Tabs } from 'antd';
import RoomContent from './RoomContent';
import { SCENE_MAIN_BUTTONS } from '../../static/constants';
import styled from 'styled-components';

const { TabPane } = Tabs;
const MyTab = styled(Tabs)`
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.65);
`;
const Room = () => {
    return (
        <div>
            <MyTab defaultActiveKey="1" type="card" size="large">
                {SCENE_MAIN_BUTTONS.map((tabs) => (
                    <TabPane tab={tabs.title} key={tabs.key}>
                        <RoomContent tabKey={tabs.key} />
                    </TabPane>
                ))}
            </MyTab>
        </div>
    );
};
export default Room;
