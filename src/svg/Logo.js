import React from "react";
import styled from "styled-components";

const BaseLogo = () => (
    <svg width="18" height="18" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
            x="40"
            y="0.402023"
            width="56"
            height="56"
            transform="rotate(45 40 0.402023)"
            fill="black"
        />
    </svg>
);

export const Logo = styled(BaseLogo)`
    width: 40px;
    height: 10px;
`;
