import { useState } from 'react';
import { Menu, Searchbar } from 'components';
import {
  ButtonMenu,
  HeaderStyled,
  IconMenu,
  Wrapper,
  WrapperLogo,
  WrapperMobil,
} from './Header.styled';

export const Header = ({ background }) => {
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setShowModal(true);
  };

  const onCloseModal = () => {
    document.body.style.overflow = 'auto';
    setShowModal(false);
  };

  return (
    <HeaderStyled background={background}>
      <WrapperLogo to="/" background={background} />
      <Wrapper>
        <WrapperMobil>
          <Searchbar />
        </WrapperMobil>
        <ButtonMenu onClick={onOpenModal}>
          <IconMenu />
        </ButtonMenu>
        {showModal && <Menu onClose={onCloseModal} />}
      </Wrapper>
    </HeaderStyled>
  );
};
