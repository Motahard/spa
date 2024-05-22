import React, { ReactElement, useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import {
  ModalContainer,
  ModalWrapper,
  ModalOverlay,
} from '@/components/modal/styles';

type Props = {
  children: ReactElement;
  onClose: VoidFunction;
};

export const Modal = ({ children, onClose }: Props) => {
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  const backDropHandler = useCallback(
    (e: MouseEvent) => {
      if (!modalWrapperRef?.current?.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('click', backDropHandler);
    });

    return () => window.removeEventListener('click', backDropHandler);
  }, [backDropHandler]);

  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => window.removeEventListener('keydown', keyDownHandler);
  });

  const ModalComponent = (
    <ModalOverlay>
      <ModalContainer ref={modalWrapperRef}>
        <ModalWrapper>{children}</ModalWrapper>
      </ModalContainer>
    </ModalOverlay>
  );

  return ReactDOM.createPortal(
    ModalComponent,
    document.getElementById('modal-root') as HTMLElement
  );
};
