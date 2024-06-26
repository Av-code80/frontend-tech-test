import React from 'react';
import { FlexBox, Alignment, ImageBlock } from '@lumx/react';
import Search from '../../components/Search';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className='header' role='banner'>
      <FlexBox
        as='div'
        vAlign={Alignment.spaceBetween}
        hAlign={Alignment.center}
      >
        <ImageBlock
          alt='Marvel logo'
          image='/assets/marvel_logo.svg.png'
          className='header-logo'
        />
        <Search onSearch={onSearch} />
      </FlexBox>
    </header>
  );
};

export default Header;
