import React from 'react';
import './SideBar.scss';

const Icons = [
  {
    id: 'homeBut',
    url: 'https://res.cloudinary.com/dvinxey2w/image/upload/v1642370034/ABA/ICONS%2032PX/home-01_lwkzeq.svg',
  },
  {
    id: 'searchBut',
    url: 'https://res.cloudinary.com/dvinxey2w/image/upload/v1642370038/ABA/ICONS%2032PX/search-69_ekxkgd.svg',
  },
  {
    id: 'categoryBut',
    url: 'https://res.cloudinary.com/dvinxey2w/image/upload/v1642370029/ABA/ICONS%2032PX/category-07_nv7v6d.svg',
  },
  {
    id: 'deliveryBut',
    url: 'https://res.cloudinary.com/dvinxey2w/image/upload/v1642370032/ABA/ICONS%2032PX/delivery-21_zwqzcv.svg',
  },
  {
    id: 'contactBut',
    url: 'https://res.cloudinary.com/dvinxey2w/image/upload/v1642718993/ABA/ICONS%2032PX/contact2-05_yuim2f.svg',
  },
];

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className='sideLogo'>
        <button type='button' className='logoButton'>
          logo
        </button>
      </div>
      <div className='sideButtons'>
        {Icons.map((data) => (
          <button key={data.id} className='sideButton' id={data.id}>
            <img src={data.url} className='buttonImg' alt={data.id} />
          </button>
        ))}
      </div>
      <div className='sideConfig'>
        <button type='button' className='configButton'>
          <img
            src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642719248/ABA/ICONS%2032PX/config-75_nf1q9y.svg'
            className='configImg'
            alt='configBut'
          />
        </button>
      </div>
      <div className='sideInfo'>
        <button type='button' className='infoButton'>
          info
        </button>
      </div>
    </div>
  );
};

export default SideBar;
