import Head from 'next/head';
import Link from "next/link";
import {RiGithubFill, RiLinkedinBoxFill, RiPhoneFill} from "react-icons/ri";
import {ProjectTag} from "./ExperienceComponents";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {createDisappearingVariant} from "./animations";

export const VARIANT="dark"
export const ICON_SIZE=30;


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

export function GitHubIcon({href,className}:{href:string, className:string}) {
    return <a href={href} className="contactIcon"> <RiGithubFill className={className}/> </a>;
}

export function ContactMediaBar({showAboutLink, iconClassName}:{showAboutLink:boolean,iconClassName:string}) {
    //hardcoded sizes, due to library.
    return <div>
            <a href="https://www.linkedin.com/in/kevin-brereton/" className="contactIcon"> <RiLinkedinBoxFill className={iconClassName}/> </a>
            <GitHubIcon href="https://github.com/k-brereton/" className={iconClassName}/>
            {
                showAboutLink && <Link href="/about" passHref>
                    <a className="contactIcon"> <RiPhoneFill className={iconClassName}/> </a>
                </Link>
            }
        </div>
}

const DISAPPEARING_VARIANT=createDisappearingVariant(0.5,0)

interface SkillsBoxProps {
    readonly title:string|null;
    readonly skills:ReadonlyArray<ProjectTag>;
}
export function SkillsBox({title,skills}:SkillsBoxProps){

    const links=skills.map((skill)=>{
        return <motion.div key={skill} variants={DISAPPEARING_VARIANT}>
            <Link href={`/skills/${skill}`}>{skill}</Link>
        </motion.div>;
    });
    if(title===null){
        return <div className="skillsBox">{links}</div>
    }
    else{
        return <div className="skillsBoxWrapper">
            <div className="skillsBoxTitle">
                {title}
            </div>
            <div className="skillsBox">{links}</div>
        </div>
    }
}

interface CollapsableSkillsBoxProps extends SkillsBoxProps{
    className:string;
}


export function CollapsableSkillsBox({title, skills,className}: CollapsableSkillsBoxProps) {

    const [isCollapsed,setIsCollapsed]=useState(true);
    const shownSkills=isCollapsed? skills.slice(0, 3):skills;
    const buttonContent=isCollapsed? "+" : "-"

    const links=shownSkills.map((skill,idx)=>{
        const delayOffset=Math.floor(idx/3)*0.1;

        return <AnimatePresence key={skill}  >
            <motion.div layout transition={{delay:delayOffset}} initial={{ opacity: 0 }}  animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Link href={`/skills/${skill}`}>{skill}</Link>
            </motion.div>
        </AnimatePresence>;
    });
    let body=<motion.div layout className={`collapsableSkillsBoxOuter ${className}`} >
        <motion.div className="skillsBox" layout >
            {links}
        </motion.div>
        <motion.div layout className="collapseButton" onClick={()=>setIsCollapsed(!isCollapsed)}>{buttonContent}</motion.div>
    </motion.div>;

    if(title===null){
        return body;
    }
    else{
        return <>
            <div className="skillsBoxTitle">
                {title}
            </div>
            {body}
        </>
    }
}

