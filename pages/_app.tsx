import 'bootswatch/dist/darkly/bootstrap.min.css';

import type { AppProps } from 'next/app'
import {Nav, Navbar} from "react-bootstrap";
import {VARIANT} from "../components/CommonComponents";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import "../globals.scss"
import "../components/CommonComponents.scss"
import {AnimatePresence, motion} from 'framer-motion';
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
    return <footer className="centering">
        <h2>
        <Link href="/" passHref>
            <a>🠔 Back to home</a>
        </Link>
    </h2>
    </footer>
}

const variants={
    hidden: { y:1000 },
    show: {
        y:0,
        transition: {
            delayChildren: 0.5,
            duration:0.5
        }
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const {pathname}=router;

    return <>
        <Header pathname={pathname}/>
        <main >
            <AnimatePresence>
                <motion.div className="contentDiv" initial="hidden"
                            animate="show" exit="hidden" variants={variants} >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </main>
        {pathname !== "/"&&<BackToHomeLink/>}
    </>
}

export default MyApp
