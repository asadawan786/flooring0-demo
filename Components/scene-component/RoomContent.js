import React from 'react';
import { Col, Row } from 'antd';
import RoomCard from './RoomCard';
const RoomData = [
    {
        title: 'Bedroom1',
        key: 'r1',
        image: '/static/room.png',
        type: 'bedroom',
        isLocked: true
    },
    {
        title: 'Bedroom2',
        key: 'r2',
        image: '/static/room.png',
        type: 'bedroom',
        isLocked: false
    },
    {
        title: 'Bedroom3',
        key: 'r3',
        image: '/static/room.png',
        type: 'bedroom',
        isLocked: false
    },
    {
        title: 'Kitchen 1',
        key: 'r4',
        image: '/static/room.png',
        type: 'kitchen',
        isLocked: false
    },
    {
        title: 'Kitchen 2',
        key: 'r5',
        image: '/static/room.png',
        type: 'kitchen',
        isLocked: true
    },
    {
        title: 'Bathroom',
        key: 'r6',
        image: '/static/room.png',
        type: 'bathroom',
        isLocked: false
    },
    {
        title: 'Office',
        key: 'r7',
        image: '/static/room.png',
        type: 'office',
        isLocked: true
    },
    {
        title: 'Living Room 1',
        key: 'r8',
        image: '/static/room.png',
        type: 'living-room',
        isLocked: false
    },
    {
        title: 'Office',
        key: 'r7',
        image: '/static/room.png',
        type: 'all',
        isLocked: true
    },
    {
        title: 'Living Room 1',
        key: 'r8',
        image: '/static/room.png',
        type: 'all',
        isLocked: false
    },
    {
        title: 'Living Room 2',
        key: 'r9',
        image: '/static/room.png',
        type: 'living-room',
        isLocked: true
    }
];

const RoomContent = ({ tabKey }) => {
    return (
        <Row gutter={16}>
            {RoomData.map((item) => {
                if (item.type === tabKey)
                    return (
                        <Col
                            key={item.key}
                            className="gutter-row"
                            span={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <RoomCard
                                title={item.title}
                                image={item.image}
                                isLocked={item.isLocked}
                            />
                        </Col>
                    );
            })}
        </Row>
    );
};

export default RoomContent;
