import Section from '../Section';

import { Action, Item, Itens, Modal, ModalContent } from './styles';

import hogwartsGalery from '../../assets/images/galery.png';
import play from '../../assets/images/play.svg';
import zoom from '../../assets/images/mais-zoom.svg';
import close from '../../assets/images/close.svg';
import { useState } from 'react';

interface GalleryItem {
  type: 'image' | 'video';
  url: string;
}

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

type Props = {
  defaultCover: string;
  name: string;
};

const mockGallery: GalleryItem[] = [
  { type: 'image', url: hogwartsGalery },
  { type: 'image', url: hogwartsGalery },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=1O6Qstncpnc&ab_channel=PlayStation',
  },
  { type: 'image', url: hogwartsGalery },
];

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    type: 'image',
    url: '',
    isVisible: false,
  });

  const closeModal = () => {
    setModal({
      type: 'image',
      url: '',
      isVisible: false,
    });
  };

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url;
    return defaultCover;
  };

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom;
    return play;
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <Itens>
          {mockGallery.map((item, index) => (
            <Item
              key={index}
              onClick={() => {
                setModal({
                  type: item.type,
                  url: item.url,
                  isVisible: true,
                });
              }}
            >
              <img
                src={getMediaCover(item)}
                alt={`Imagem ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(item)}
                  alt="Clique para assistir a mídia"
                />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal className={modal.isVisible ? 'show' : ''}>
        <ModalContent className="container">
          <header>
            <h4>Name</h4>
            <img src={close} alt="Icone de fechar" onClick={closeModal} />
          </header>
          <div className="imageContainer">
            {modal.type === 'image' ? (
              <img src={modal.url} alt="Midia do Jogo" />
            ) : (
              <iframe src={modal.url} frameBorder={0}></iframe>
            )}
          </div>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  );
};
export default Gallery;
