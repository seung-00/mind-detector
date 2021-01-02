import React from 'react';
import styled from 'styled-components';
import Gage1 from '../../styles/img/gage1.png';
import Gage2 from '../../styles/img/gage2.png';
import Gage3 from '../../styles/img/gage3.png';
import Gage4 from '../../styles/img/gage4.png';
import Gage5 from '../../styles/img/gage5.png';
import Gage6 from '../../styles/img/gage6.png';
import Gage7 from '../../styles/img/gage7.png';
import Gage8 from '../../styles/img/gage8.png';

const GageWrapper = styled.div`
  margin-top: 8.7rem;
  margin-bottom: 9.2rem;
`;

interface GageProps {
  level: number;
}

function Gage({ level }: GageProps) {
  return (
    <GageWrapper>
      {level === 1 && <img src={Gage1} />}
      {level === 2 && <img src={Gage2} />}
      {level === 3 && <img src={Gage3} />}
      {level === 4 && <img src={Gage4} />}
      {level === 5 && <img src={Gage5} />}
      {level === 6 && <img src={Gage6} />}
      {level === 7 && <img src={Gage7} />}
      {level === 8 && <img src={Gage8} />}
    </GageWrapper>
  );
}

export default Gage;
