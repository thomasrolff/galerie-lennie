import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const BaseMenuLogo = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 49 46"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 1.98208C0 0.219769 2.1112 -0.662801 3.34593 0.583342L11.6807 8.99518C12.9155 10.2413 12.041 12.372 10.2948 12.372H1.96C0.877522 12.372 0 11.4864 0 10.3939V1.98208Z" />
        <path d="M3.34593 34.2113C2.1112 32.9652 2.98569 30.8344 4.73186 30.8344H13.0667C14.1491 30.8344 15.0267 31.7201 15.0267 32.8126V41.2244C15.0267 42.9867 12.9155 43.8693 11.6807 42.6231L3.34593 34.2113Z" />
        <path d="M16.9867 32.8126C16.9867 31.7201 17.8642 30.8344 18.9467 30.8344H30.0533C31.1358 30.8344 32.0133 31.7201 32.0133 32.8126V44.0219C32.0133 45.1144 31.1358 46 30.0533 46H18.9467C17.8642 46 16.9867 45.1144 16.9867 44.0219V32.8126Z" />
        <path d="M16.9867 16.3283C16.9867 15.2358 17.8642 14.3502 18.9467 14.3502H30.0533C31.1358 14.3502 32.0133 15.2358 32.0133 16.3283V26.8782C32.0133 27.9707 31.1358 28.8563 30.0533 28.8563H18.9467C17.8642 28.8563 16.9867 27.9707 16.9867 26.8782V16.3283Z" />
        <path d="M33.9733 16.3283C33.9733 15.2358 34.8509 14.3502 35.9333 14.3502H47.04C48.1225 14.3502 49 15.2358 49 16.3283V26.8782C49 27.9707 48.1225 28.8563 47.04 28.8563H35.9333C34.8509 28.8563 33.9733 27.9707 33.9733 26.8782V16.3283Z" />
        <path d="M0 16.3283C0 15.2358 0.877522 14.3502 1.96 14.3502H13.0667C14.1491 14.3502 15.0267 15.2358 15.0267 16.3283V26.8782C15.0267 27.9707 14.1491 28.8563 13.0667 28.8563H1.96C0.877522 28.8563 0 27.9707 0 26.8782V16.3283Z" />
        <path d="M33.9733 32.8126C33.9733 31.7201 34.8509 30.8344 35.9333 30.8344H44.2681C46.0143 30.8344 46.8888 32.9652 45.6541 34.2113L37.3193 42.6231C36.0845 43.8693 33.9733 42.9867 33.9733 41.2244V32.8126Z" />
        <path d="M45.6541 0.583343C46.8888 -0.662801 49 0.219769 49 1.98208V10.3939C49 11.4864 48.1225 12.372 47.04 12.372H38.7052C36.959 12.372 36.0845 10.2413 37.3193 8.99518L45.6541 0.583343Z" />
    </svg>
);

export const MenuLogo = styled(BaseMenuLogo)``;
