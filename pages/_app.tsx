import 'bootswatch/dist/darkly/bootstrap.min.css';
import "../globals.scss"
import "../components/CommonComponents.scss"

import type { AppProps } from 'next/app'
import {Nav, Navbar} from "react-bootstrap";
import {VARIANT} from "../components/CommonComponents";
import Link from "next/link";
import Image from "next/image";
import {AnimatePresence, AnimateSharedLayout, motion, Variants} from "framer-motion";
const HEADER_LOGO_SIZE_PX=30;

export function Header({pathname}:{pathname:string}) {

    return <Navbar expand="sm" bg={VARIANT} variant={VARIANT}>
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
        <h2 className="backToHomeLink">
        <Link href="/" passHref>
            <a>🠔 Back to home</a>
        </Link>
    </h2>
    </footer>
}

const variants:Variants={
    beforePageLoad: { y:1000 },
    pageLoaded: {
        y:0,
        transition: {
            when:"beforeChildren",
            duration:0.5
        }
    },
    pageExit:{
        y:1000,
        transition: {
            when:"afterChildren",
            duration:0.5
        },
    }
}

function MyApp({ Component, pageProps, router }: AppProps) {
    const {asPath}=router;
    console.log(asPath)

    return <AnimateSharedLayout>
        <Header pathname={asPath}/>
            <motion.div className={"contentDivWrapper"}>
                <AnimatePresence exitBeforeEnter>
                    <motion.div key={asPath} className="contentDiv" initial="beforePageLoad" animate="pageLoaded" exit="pageExit" variants={variants} >
                        <main className="mainContent">
                                <Component {...pageProps} />
                        </main>
                        {asPath !== "/"&&<BackToHomeLink/>}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </AnimateSharedLayout>
}

export default MyApp
