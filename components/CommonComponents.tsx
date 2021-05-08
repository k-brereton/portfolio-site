import Head from 'next/head';
import Link from "next/link";
import {RiGithubFill, RiLinkedinBoxFill, RiPhoneFill} from "react-icons/ri";

// @ts-ignore
import style from "./CommonComponents.module.css"

export const VARIANT="dark"


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



    return <a href={link} className={style.icon}> <Icon size={30}/> </a>
}

export function ContactMediaBar() {
    //forced hardcoded sizes, due to library.
    return <>
            <ContactMediaIcon link="https://www.linkedin.com/in/kevin-brereton/" Icon={RiLinkedinBoxFill} />
            <ContactMediaIcon link="https://github.com/k-brereton/" Icon={RiGithubFill} />
        </>
}