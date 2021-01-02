import Link from 'next/link';
import styled from 'styled-components';
import { Logo } from '../svg';

const NavbarWrapper = styled.ul`
    margin: 0;
    padding: 1rem;
    display: flex;
    list-style: none;
    border-bottom: 3px solid #000;

    li {
        margin-right: 20px;

        &:first-child {
            margin-right: 3rem;
        }

        &:first-child a:hover {
            border-bottom: none;
        }

        &:last-child {
            margin-left: auto;

            svg {
                margin-left: 1rem;

                &:hover {
                    cursor: pointer;
                }
            }
        }   
    }

    a {
        color: #000;
        text-decoration: none;
        font-weight: 800;

        &:hover {
            border-bottom: 3px solid;
        }
    }
`;


export const Navbar = () => (
    <>
        <NavbarWrapper>
            <li>
                <Link href="/">
                    <a><Logo /></a>
                </Link>
            </li>
            <li><Link href="/artworks"><a>Kunstwerken</a></Link></li>
            <li><Link href="/artists"><a>Kunstenaars</a></Link></li>
            <li><Link href="/about"><a>Over</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
            <li>
                <div>
                    <Logo />
                    <Logo />
                    <Logo />
                    <Logo />
                </div>
            </li>
        </NavbarWrapper>
    </>
);
