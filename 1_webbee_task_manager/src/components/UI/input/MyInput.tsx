import React, { FC } from 'react';
import classes from '../input/MyInput.module.css';
// import { PropsWithChildren } from 'react'; //Нужно чтобы каждый раз не прописывать children

interface MyInputProps extends React.ComponentPropsWithRef<'input'> {
  children?: React.ReactChild | React.ReactNode;
}

const MyInput: FC<MyInputProps> = ({ children, ...props }) => {
  return (
    <input className={classes.myInput} {...props}>
      {children}
    </input>
  );
};

export default MyInput;
