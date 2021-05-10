import Head from 'next/head';
import Link from "next/link";
import {RiGithubFill, RiLinkedinBoxFill, RiPhoneFill} from "react-icons/ri";

// @ts-ignore
import style from "./CommonComponents.module.css"

export const VARIANT="dark"
const ICON_SIZE=30;

export function LoadingScreen() {
    return <div>loading...</div>
}

interface HeaderProps{
    description:string;
    title:string;
}
export function PageHead({description,title}:HeaderProps) {
    return <Head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content={description}/>
        <meta property="og:image" content="/images/logo.png"/>
        {/*todo more meta tags if needed*/}
        <meta name="og:title" content="Kevin Brereton Resume" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
    </Head>
}



export function ContactMediaBar({showAboutLink}:{showAboutLink:boolean}) {
    //forced hardcoded sizes, due to library.
    return <div>
            <a href="https://www.linkedin.com/in/kevin-brereton/" className={style.icon}> <RiLinkedinBoxFill size={ICON_SIZE}/> </a>
            <a href="https://github.com/k-brereton/" className={style.icon}> <RiGithubFill size={ICON_SIZE}/> </a>
            {
                showAboutLink && <Link href="/about" passHref>
                    <a className={style.icon}> <RiPhoneFill size={ICON_SIZE}/> </a>
                </Link>
            }
        </div>
}