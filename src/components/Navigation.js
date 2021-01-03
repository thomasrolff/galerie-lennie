import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { MenuLogo } from '../svg';
import { MAX_WIDTH, breakpoints, colors } from '../constants';

const MobileMenu = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background: ${colors.redPrimary};
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 800;
`;

const NavbarInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${MAX_WIDTH};
`;

const MobileMenuButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

const Stripe = styled.div`
    width: 26px;
    height: 3px;
    margin: 2.5px 0;
    background: ${colors.redPrimary};
    border-radius: 15px;
`;

const BaseNavigation = ({ className }) => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    return (
        <>
            <nav className={className}>
                {mobileMenuVisible && (
                    <MobileMenu
                        onClick={() =>
                            setMobileMenuVisible(!mobileMenuVisible)
                        }
                    >
                        <h2>Menu</h2>
                        <ul>
                            <li>
                                <Link href="/artworks">
                                    <a>Kunstwerken</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/artists">
                                    <a>Kunstenaars</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a>Over ons</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </MobileMenu>
                )}

                <NavbarInnerContainer>
                    <Link href="/">
                        <a>
                            <MenuLogo />
                        </a>
                    </Link>
                    <MobileMenuButton
                        onClick={() =>
                            setMobileMenuVisible(!mobileMenuVisible)
                        }
                    >
                        <Stripe />
                        <Stripe />
                        <Stripe />
                    </MobileMenuButton>

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
                                <a>over ons</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>contact</a>
                            </Link>
                        </li>
                    </ul>
                </NavbarInnerContainer>
            </nav>
        </>
    );
};

export const Navigation = styled(BaseNavigation)`
    display: flex;
    justify-content: center;
    background: ${colors.whitePrimary};
    height: 64px;

    ${MenuLogo} {
        height: 40px;
        margin-left: 24px;
        fill: ${colors.redPrimary};
    }

    ${MobileMenuButton} {
        height: 64px;
        width: 64px;

        @media (${breakpoints.mediumMin}) {
            display: none;
        }
    }
    ${NavbarInnerContainer} {
        ul {
            display: none;

            @media (${breakpoints.mediumMin}) {
                display: flex;

                li {
                    margin: 0 24px;
                    font-weight: 600;

                    a:hover {
                        color: ${colors.redPrimary};
                    }
                }
            }
        }
    }

    ${MobileMenu} {
        h2 {
            font-size: 64px;
            font-weight: 800;
            color: ${colors.whitePrimary};
            margin-top: 20%;
            margin-bottom: 24px;
        }
        li {
            font-weight: 600;
            margin: 20px 0;
            font-size: 40px;
            text-align: center;

            a {
                color: ${colors.whitePrimary};
            }
        }
    }
`;
