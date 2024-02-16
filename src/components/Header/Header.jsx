import { useState } from 'react';
import { Container, MobilMenu, Searchbar } from 'components';
import { ButtonMenu, HeaderStyled, IconMenu, Wrapper, WrapperLogo } from './Header.styled';

export const Header = () => {
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
    <Container>
      <HeaderStyled>
        <WrapperLogo to="/" />
        <Searchbar />
        <Wrapper>
          <ButtonMenu onClick={onOpenModal}>
            <IconMenu />
          </ButtonMenu>
          {showModal && <MobilMenu onClose={onCloseModal} />}
        </Wrapper>
      </HeaderStyled>
    </Container>
  );
};
