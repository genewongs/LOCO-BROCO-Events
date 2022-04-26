import React from 'react';

import { HomeOutline, StarOutline, NavigateOutline, BookmarkOutline, MailOutline } from 'react-ionicons'

export default function NavBar() {

  return(
    <div className="navigation">
      <ul>
        <li className="list active">
          <a href='#'>
            <span className="icon">
              <HomeOutline
              color={'#000000'}
              title='home'
              height="35px"
              width="35px"
               />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className="list">
          <a href='#'>
            <span className="icon">
              <StarOutline
                color={'#000000'}
                title='My Events'
                height="35px"
                width="35px"
              />
            </span>
            <span className="text">My Events</span>
          </a>
        </li>
        <li className="list">
          <a href='#'>
            <span className="icon">
            <BookmarkOutline
              color={'#000000'}
              title='Interested'
              height="35px"
              width="35px"
            />
            </span>
            <span className="text">Interested</span>
          </a>
        </li>
        <li className="list">
          <a href='#'>
            <span className="icon">
            <MailOutline
              color={'#000000'}
              title=''
              height="35px"
              width="35px"
            />
            </span>
            <span className="text">Contact</span>
          </a>
        </li>
        <li className="list">
          <a href='#'>
            <span className="icon">
              <NavigateOutline
                color={'#000000'}
                title=''
                height="35px"
                width="35px"
              />
            </span>
            <span className="text">Share</span>
          </a>
        </li>
        <div className='indicator'></div>
      </ul>
    </div>
  )
}