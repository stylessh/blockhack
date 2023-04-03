import { FC, SVGProps } from "react";

export const EthereumIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="14"
      height="21"
      viewBox="0 0 14 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 0.5L0 10.7439L7 14.4024L14 10.7439L7 0.5ZM0 11.9634L7 20.5L14 11.9634L7 15.622L0 11.9634Z"
        fill="white"
      />
    </svg>
  );
};
