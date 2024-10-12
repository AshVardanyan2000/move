import React from 'react';
import genresIcon from '../../../assets/icons/genres.png';
import homeIcon from '../../../assets/icons/home.png';
import movesIcon from '../../../assets/icons/moves.png';
import searchIcon from '../../../assets/icons/search.png';
import TVShowsIcon from '../../../assets/icons/tv_shows.png';
import watchLaterIcon from '../../../assets/icons/watch_later.png';
import avatarIcon from '../../../assets/icons/avatar.png';
import classNames from "classnames";
import {useLocation} from "react-router-dom";

const menuItems = [
  {
    label: 'Search',
    path: '/search',
    icon: searchIcon,
  },
  {
    label: 'Home',
    path: '/',
    icon: homeIcon,
  },
  {
    label: 'TV Shows',
    path: '/TV-shows',
    icon: TVShowsIcon,
  },
  {
    label: 'Moves',
    path: '/moves',
    icon: movesIcon,
  },
  {
    label: 'Genres',
    path: '/genres',
    icon: genresIcon,
  },
  {
    label: 'Watch Later',
    path: '/watch-later',
    icon: watchLaterIcon,
  },
]

const Index = () => {
  const { pathname } = useLocation();

  const onMenuClick = (path) => {
    console.log(`navigate ${path}`)
  }

  return (
    <div className='menu_wrapper'>
      <div className='menu_avatar'>
        <div>
          <img src={avatarIcon} alt="avatar"/>
        </div>

        <p>Daniel</p>
      </div>

      <div className='menu_item_wrapper'>
        {menuItems.map(item => (
          <div
            role='button'
            tabIndex='0'
            onClick={() => onMenuClick(item.path)}
            className={classNames('menu_item', { active: item.path === pathname })}
            key={item.path}>

            <div>
              <img src={item.icon} alt={item.path}/>
            </div>

            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className='menu_bottom_item_wrapper'>
        <div
          role='button'
          tabIndex='0'
          onClick={() => onMenuClick('/language')}
        >LANGUAGE
        </div>

        <div
          role='button'
          tabIndex='0'
          onClick={() => onMenuClick('/help')}
        >GET HELP
        </div>

        <div
          role='button'
          tabIndex='0'
          onClick={() => onMenuClick('/exit')}
        >EXIT
        </div>
      </div>
    </div>
  )
};

export default Index;
