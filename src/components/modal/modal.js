import React from 'react';
import ReactDOM from 'react-dom';
import * as Styled from './modal.styles';
import { Spinner } from '../spinner/spinner';
import { useHistory } from 'react-router-dom';

const Modal = ({ news, toggleModal }) => {
  const history = useHistory();
  const renderModalContent = () => {
    return (
      <Styled.Modal onClick={() => toggleModal()}>
        {news ? (
          <Styled.ModalContent onClick={e => e.stopPropagation()}>
            <Styled.ModalCancel onClick={() => toggleModal()} />
            <Styled.ModalImage alt={news.title} src={news.urlToImage}>
              <Styled.ModalTitle>{news.title}</Styled.ModalTitle>
            </Styled.ModalImage>
            <Styled.ModalDescription>
              <Styled.ModalRelease>
                Published at {news.publishedAt.slice(0, 10)}
              </Styled.ModalRelease>
              <Styled.ModalDetails>
                {/* {news.description}
                <br />
                <br /> */}
                {!news.content ? 'Content not found ...' : news.content}
              </Styled.ModalDetails>
              <Styled.ModalButton target="_blank" rel="noopener" href={news.url}>
                Read more
                <Styled.ArrowRight />
              </Styled.ModalButton>
            </Styled.ModalDescription>
          </Styled.ModalContent>
        ) : (
          <Spinner />
        )}
      </Styled.Modal>
    );
  };
  return ReactDOM.createPortal(renderModalContent(), document.body);
};

export default Modal;
