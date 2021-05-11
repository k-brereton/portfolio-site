import 'bootswatch/dist/darkly/bootstrap.min.css';
import type { AppProps } from 'next/app'
import {Nav, Navbar} from "react-bootstrap";
import {VARIANT} from "../components/CommonComponents";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import "../globals.scss"
const HEADER_LOGO_SIZE_PX=30;

export function Header({pathname}:{pathname:string}) {

    return <Navbar expand="md" bg={VARIANT} variant={VARIANT}>
        <Link href="/" passHref>
            <Navbar.Brand>
                <Image src="/images/logo.png"  width={HEADER_LOGO_SIZE_PX} height={HEADER_LOGO_SIZE_PX} alt="Kevin Brereton Logo"/>
            </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse>
            <Nav activeKey={pathname} className="ml-auto">
                <Link href="/experience" passHref><Nav.Link>experience</Nav.Link></Link>
                <Link href="/projects" passHref><Nav.Link>projects</Nav.Link></Link>
                <Link href="/skills" passHref><Nav.Link>skills</Nav.Link></Link>
                <Link href="/about" passHref><Nav.Link>about</Nav.Link></Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

function BackToHomeLink() {
    return <div className="centering">
        <h2>
        <Link href="/" passHref>
            <a>🠔 Back to home</a>
        </Link>
    </h2>
    </div>
}


function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const {pathname}=router;

    return <>
        <Header pathname={pathname}/>
        <main >
            <Component {...pageProps} />
        </main>
        {pathname !== "/"&&<BackToHomeLink/>}
    </>
}

export default MyApp