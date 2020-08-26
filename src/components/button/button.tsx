import React, { ReactElement } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  children: ReactElement | string
}

export default function Button({ children }: ButtonProps): ReactElement {
  return (
    <button type="button" className={`${styles.btn} ${styles.btnBlue}`}>
      {children}
    </button>
  );
}
