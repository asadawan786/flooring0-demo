import React from 'react';
import { Card } from 'antd';
import SceneLayout from '../Components/scene-component/SceneLayout';

const Scene = () => {
  return (
    <Card title={'Scene'} className="site-card-wrapper">
      <SceneLayout />
    </Card>
  );
};
export default Scene;
