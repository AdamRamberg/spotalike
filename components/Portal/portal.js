import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const [node, setNode] = useState(null);
  useEffect(() => {
    setNode(document.body);
  }, []);
  if (!node) {
    return null;
  }

  return createPortal(children, node);
};

export default Portal;
