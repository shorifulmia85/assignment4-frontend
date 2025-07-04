import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const ContainerBox = ({ children }: ContainerProps) => {
  return <div className="max-w-7xl mx-auto px-3">{children}</div>;
};

export default ContainerBox;
