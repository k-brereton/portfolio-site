import 'bootswatch/dist/darkly/bootstrap.min.css';
import type { AppProps /*, AppContext */ } from 'next/app'
import {Nav, Navbar} from "react-bootstrap";
import {VARIANT} from "../components/CommonComponents";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";


export function Header() {
    const router = useRouter();

    return <Navbar expand="md" bg={VARIANT} variant={VARIANT}>
        <Link href="/" passHref>
            <Navbar.Brand>
                <Image src="/images/logo.png"  width={30} height={30} alt="Kevin Brereton Logo"/>
            </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse>
            <Nav activeKey={router.pathname} className="ml-auto">
                <Link href="/experience" passHref><Nav.Link>experience</Nav.Link></Link>
                <Link href="/projects" passHref><Nav.Link>projects</Nav.Link></Link>
                <Link href="/skills" passHref><Nav.Link>skills</Nav.Link></Link>
                <Link href="/about" passHref><Nav.Link>about</Nav.Link></Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

function MyApp({ Component, pageProps }: AppProps) {

  return <>
        <Header/>
        <Component {...pageProps} />
    </>
}

export default MyApp
