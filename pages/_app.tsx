import 'bootswatch/dist/darkly/bootstrap.min.css';
import "../globals.scss"

//no css modules, since the current version of next.js has no way to defer links changing the page, which messes with the css.
//there are ways to fix this by using the router apis and essentially making my own "Link" component, but the complexity outweighs the benefits

import "../components/CommonComponents.scss"
import "../components/ExperienceComponents.scss"
import "./skills/index.scss"
import "./about.scss"
import "./index.scss"

import type { AppProps } from 'next/app'
import {Nav, Navbar} from "react-bootstrap";
import {VARIANT} from "../components/CommonComponents";
import Link from "next/link";
import Image from "next/image";
import {AnimatePresence, AnimateSharedLayout, motion, Variants} from "framer-motion";
const HEADER_LOGO_SIZE_PX=50;

export function Header({pathname}:{pathname:string}) {

    return <Navbar expand="sm" bg={VARIANT} variant={VARIANT}>
        <Link scroll={false} href="/" passHref>
            <Navbar.Brand>
                <Image src="/images/logo.svg"  width={HEADER_LOGO_SIZE_PX} height={HEADER_LOGO_SIZE_PX} alt="Kevin Brereton Logo"/>
            </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav activeKey={pathname} className="ml-auto">
                <Link scroll={false} href="/experience" passHref><Nav.Link>experience</Nav.Link></Link>
                <Link scroll={false} href="/projects" passHref><Nav.Link>projects</Nav.Link></Link>
                <Link scroll={false} href="/skills" passHref><Nav.Link>skills</Nav.Link></Link>
                <Link scroll={false} href="/about" passHref><Nav.Link>about</Nav.Link></Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

function BackToHomeLink() {
    return <footer className="centering">
        <div className="backToHomeLink">
        <Link scroll={false} href="/">
            🠔 Back to home
        </Link>
    </div>
    </footer>
}

const variants:Variants={
    beforePageLoad: { y:1000 },
    pageLoaded: {
        y:0,
        transition: {
            when:"beforeChildren",
            duration:0.45
        }
    },
    pageExit:{
        y:1000,
        transition: {
            when:"afterChildren",
            duration:0.4
        },
    }
}

function MyApp({ Component, pageProps, router }: AppProps) {
    const {asPath}=router;
    return <AnimateSharedLayout>
        <Header pathname={asPath}/>
            <motion.div className={"contentDivWrapper"}>
                <AnimatePresence exitBeforeEnter onExitComplete={()=>window.scrollTo(0, 0)}>
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
