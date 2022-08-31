import React, { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';

const Overview: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  let viewer: any;
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZDE3YTE1Ni1iYTJjLTRjYjAtYTIyYi0zMDQ0M2UwN2NlNmQiLCJpZCI6NTg3MjcsImlhdCI6MTYyMzM4OTE3NH0.PS43TPHDe7ewqpHVLZXU4rrNC9E132RWas92ql_1jPI';
  useEffect(() => {
    if (!!viewer) return;
    viewer = new Cesium.Viewer(divRef.current as Element, {
      animation: true, // 动画控制，默认true
    });
  });
  return (
    <div>
      <div ref={divRef} />
    </div>
  );
};

export default Overview;
