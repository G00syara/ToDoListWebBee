import React, { FC } from 'react';
import classes from '../button/MyButton.module.css';
// import { PropsWithChildren } from 'react'; //Нужно чтобы каждый раз не прописывать children

interface MyButtonProps extends React.ComponentPropsWithRef<'button'> {
  children?: React.ReactChild | React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children, onClick, ...props }) => {
  const className = `${classes.button}`;
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
