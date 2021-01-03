import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../constants';
import { MenuLogo } from './../svg/MenuLogo';

const BaseFooter = ({ className }) => (
    <footer className={className}>
        <ul>
            <li>
                <Link href="/artworks">
                    <a>kunstwerken</a>
                </Link>
            </li>
            <li>
                <Link href="/artists">
                    <a>kunstenaars</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>over</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>contact</a>
                </Link>
            </li>
        </ul>

        <div>
            <Link href="/">
                <a>
                    <MenuLogo />
                </a>
            </Link>
            <p className="copyright">
                &copy; Copyright {new Date().getFullYear()}. All rights
                reserved.
            </p>
        </div>
    </footer>
);

export const Footer = styled(BaseFooter)`
    width: 100%;
    background: ${colors.redPrimary};
    position: fixed;
    bottom: 0;

    ul {
        margin-left: 26px;
        margin-top: 26px;
        margin-bottom: 96px;

        a {
            color: ${colors.whitePrimary};
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        color: ${colors.whitePrimary};

        ${MenuLogo} {
            height: 56px;
            fill: ${colors.whitePrimary};
        }
    }
`;
