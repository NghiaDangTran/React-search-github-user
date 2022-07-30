import React from 'react';
import { useGlobalContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {
  const { user, repos, followers } = useGlobalContext()

  return <section className='section'>
    <Wrapper className='section-center'>
      <article className='item'><span className='pink'>
        <GoRepo className='icon'></GoRepo>
      </span>
        <div>
          <h3>{user.public_repos}</h3>
          <p>repos</p>
        </div>
      </article>
      <article className='item'><span className='green'>
        <FiUsers className='icon'></FiUsers>
      </span>
        <div>
          <h3>{user.followers}</h3>
          <p>followers</p>
        </div>
      </article>
      <article className='item'><span className='purple'>
        <FiUserPlus className='icon'></FiUserPlus>
      </span>
        <div>
          <h3>{user.following}</h3>
          <p>following</p>
        </div>
      </article>
      <article className='item'><span className='yellow'>
        <GoGist className='icon'></GoGist>
      </span>
        <div>
          <h3>{user.public_gists}</h3>
          <p>gists</p>
        </div>
      </article>
   
    </Wrapper>
  </section>
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
