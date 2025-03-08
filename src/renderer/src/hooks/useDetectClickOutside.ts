/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { menuRegistry } from '@renderer/utils/menuRegistry';
import { useEffect, useRef, RefObject } from 'react';

interface UseDetectClickOutsideProps {
  onTriggered: (e: Event) => void;
  menuId?: string;
  setShowMenu?: (show: boolean) => void;
}

export function useDetectClickOutside<T extends HTMLElement>({
  onTriggered,
  menuId = '',
  setShowMenu = () => {},
}: UseDetectClickOutsideProps): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (menuId) {
      menuRegistry[menuId] = { id: menuId, setShowMenu };
    }

    return () => {
      delete menuRegistry[menuId];
    };
  }, [menuId, setShowMenu]);

  useEffect(() => {
    const handleClickEvent = (e: Event) => {
      const eventTarget = e.target as Node;

      if (ref.current && !ref.current.contains(eventTarget)) {
        onTriggered(e);
      }
    };

    document.addEventListener('mousedown', handleClickEvent);

    return () => {
      document.removeEventListener('mousedown', handleClickEvent);
    };
  }, [onTriggered]);

  return ref;
}
