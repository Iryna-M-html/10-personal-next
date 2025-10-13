import styled from './Container.module.css';
import { ReactNode } from 'react';
interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className={styled.container}>{children}</div>;
}
