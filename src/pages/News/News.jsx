import { Container } from 'components';
import { BgNews, ItemNews, ListNews, TextNews } from './News.styled';

export default function News() {
  return (
    <>
      <BgNews>Новини</BgNews>
      <Container>
        <ListNews>
          <ItemNews>
            <iframe
              src="https://www.youtube.com/embed/IaxQ2AgtsrY?si=nBoLgEtPGHGYWN-R"
              title="video burvin"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            ></iframe>
            <TextNews>Раді повідомити про вихід нової, весняно-літньої колекції🥰.</TextNews>
          </ItemNews>
          <ItemNews>
            <iframe
              src="https://www.youtube.com/embed/cbkyp14sqDY?si=7zgeB7iV_m7ziX4i"
              title="video sale burvin"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            ></iframe>
            <TextNews>СЕЗОННІ ЗНИЖКИ !!!</TextNews>
          </ItemNews>
        </ListNews>
      </Container>
    </>
  );
}
