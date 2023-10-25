import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = dynamic(() => import('../components/Mapbox'), {
  ssr: false,
});

function PillarLite() {

  return (
    <div>
      <Mapbox/>
    </div>
  );
}

export default PillarLite;
