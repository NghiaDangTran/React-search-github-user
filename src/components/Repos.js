import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import {Bar2d,Scatter, Spline, Pie3D, Column3D, Bar3D, Doughnut2D,Column2D,GroupedColumn } from './Charts';
const Repos = () => {
  const { repos } = useGlobalContext()
  



  return <section className='section'>
    <Wrapper className='section-center'>
      <Pie3D data={repos} title="Languages"></Pie3D>
      <Column3D data={repos} title="Most Popular"></Column3D>

      <Doughnut2D data={repos} title="Stars Per Language"></Doughnut2D>
      <Bar3D data={repos} title="Most Forked"></Bar3D>
      <Column2D data={repos} title="Most Size"></Column2D>
      <GroupedColumn data={repos} title="Recent Upload"></GroupedColumn>
      <Spline data={repos} title="Watchers"></Spline>
      {/* <Scatter data={repos} title="Issues"></Scatter> */}
      <Bar2d data={repos} title="Issues"></Bar2d>
    </Wrapper>

  </section>;
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }


  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
