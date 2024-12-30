import { HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

const Title = ({ children, className, ...rest }: IProps) => {
  return (
    <h1
      className={`text-[#11162E] text-6xl md:text-[180px] lg:text-[200px] xl:text-[280px] 2xl:text-[320px] font-nobile font-bold mb-2 lg:mb-4 ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default Title;
