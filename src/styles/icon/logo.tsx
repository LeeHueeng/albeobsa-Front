/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const logoStyles = css`
  width: 31px;
  height: 32px;
`;

export default function LogoComponen() {
  return (
    <svg
      css={logoStyles}
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.7612 30.9776H25.5522C27.0149 30.9776 29.5 29 29.5 26.3454C29.5 22.5 27 21.7132 25 21.7132C24.4776 21.7132 25.0224 21.5 24.5 21.5C17.5 7.50004 16.5 0.999947 13 1.4999C13 2.4999 10 14.4999 6.22388 21.7132H5.1791C2.8806 21.7132 1 23.8087 1 26.3454C1 28.8821 2.8806 30.9776 5.1791 30.9776H10.403H18.7612Z"
        stroke="#BCEB00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
