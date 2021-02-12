import React, { useState } from 'react';
import styled from 'styled-components';
import { CodeSandboxOutlined, EditOutlined, LockOutlined } from '@ant-design/icons';

const LockButton = styled(LockOutlined)`
    position: absolute;
    top: 10.62%;
    left: 10.62%;
    font-size: 24px;
    color: #001529;
    :hover {
        opacity: 0.8;
    }
    cursor: pointer;
`;

const SandBoxButton = styled(CodeSandboxOutlined)`
    position: absolute;
    left: 10%;
    right: 10%;
    top: 5%;
    bottom: 5%;
`;
const SandBoxButtonDiv = styled.div`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
    position: absolute;
    left: 78.42%;
    right: 15.92%;
    top: 86.46%;
    bottom: 5.21%;
`;

const EditButton = styled(EditOutlined)`
    position: absolute;
    left: 5.36%;
    right: 5.36%;
    top: 5.35%;
    bottom: 5.37%;
`;
const EditButtonDiv = styled.div`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
    align-items: center;
    padding: 0px;
    position: absolute;
    right: 12%;
    top: 86.46%;
    bottom: 5.21%;
`;
const MyCard = styled.div`
    width: 240px;
    height: 192px;
    border: 1px solid #f0f0f0;
    box-sizing: border-box;
    border-radius: 2px;
`;
const RoomName = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    height: 20px;
    margin-left: 8px;
`;
const StyledPhoto = styled.img`
    width: 100%;
    height: 100%;
    padding: 8px;
`;

const RoomCard = ({ title, image, isLocked }) => {
    const [disabled, setDisabled] = useState(true);
    const [vanished, setVanished] = useState(false);
    const handleUnlock = () => {
        setDisabled(false);
        setVanished(true);
    };
    if (isLocked) {
        return (
            <MyCard>
                <LockButton
                    style={{
                        opacity: vanished ? 0 : 1,
                        pointerEvents: vanished ? 'none' : 'initial'
                    }}
                    onClick={handleUnlock}
                />
                <div
                    style={{
                        opacity: disabled ? 0.25 : 1,
                        pointerEvents: disabled ? 'none' : 'initial'
                    }}>
                    <StyledPhoto src={image} alt="room" />
                    <div>
                        <RoomName>{title}</RoomName>
                        <SandBoxButtonDiv>
                            <SandBoxButton />
                        </SandBoxButtonDiv>
                        <EditButtonDiv>
                            <EditButton />
                        </EditButtonDiv>
                    </div>
                </div>
            </MyCard>
        );
    } else {
        return (
            <MyCard>
                <div>
                    <StyledPhoto src={image} alt="room" />
                    <div>
                        <RoomName>{title}</RoomName>
                        <SandBoxButtonDiv>
                            <SandBoxButton />
                        </SandBoxButtonDiv>
                        <EditButtonDiv>
                            <EditButton />
                        </EditButtonDiv>
                    </div>
                </div>
            </MyCard>
        );
    }
};
export default RoomCard;
