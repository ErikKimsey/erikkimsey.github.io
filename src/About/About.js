import React, { useState, useEffect } from 'react';
import './about.scss';
import { SKILLSET_OVERVIEW } from '../__data/data';

export default function About() {

  const [hasArrowed, setHasArrowed] = useState(false);

  return (
    <div className="about-container">
      {
        SKILLSET_OVERVIEW && SKILLSET_OVERVIEW.map((e) => {
          return <div key={e}>{e}</div>
        })
      }
    </div>
  );
}
