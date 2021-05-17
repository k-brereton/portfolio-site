import Head from 'next/head';
import Link from "next/link";
import {RiGithubFill, RiLinkedinBoxFill, RiPhoneFill} from "react-icons/ri";
import {ProjectTag} from "./ProjectComponents";
import {PropsWithChildren, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export const VARIANT="dark"
export const ICON_SIZE=30;

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

export function InitialPageAnimations({children}:PropsWithChildren<{}>) {
    return <AnimatePresence>
        <motion.div className="contentDiv" initial="hidden"
                    animate="show" exit="hidden" variants={variants} >
            {children}
        </motion.div>
    </AnimatePresence>
 }

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

export function GitHubIcon({href}:{href:string}) {
    return <a href={href} className="contactIcon"> <RiGithubFill size={ICON_SIZE}/> </a>;
}

export function ContactMediaBar({showAboutLink}:{showAboutLink:boolean}) {
    //hardcoded sizes, due to library.
    return <div>
            <a href="https://www.linkedin.com/in/kevin-brereton/" className="contactIcon"> <RiLinkedinBoxFill size={ICON_SIZE}/> </a>
            <GitHubIcon href="https://github.com/k-brereton/"/>
            {
                showAboutLink && <Link href="/about" passHref>
                    <a className="contactIcon"> <RiPhoneFill size={ICON_SIZE}/> </a>
                </Link>
            }
        </div>
}


interface TimeRangeComponentProps{
    start:string;
    end:string;
}
export function TimeRangeComponent({start, end}:TimeRangeComponentProps) {
    if(start > end){
        throw new Error("Error, inputted time invalid")
    }

    const options:Intl.DateTimeFormatOptions={month:"short",year:"numeric", timeZone:"UTC"}
    const startTimeStr=(new Date(start)).toLocaleDateString(undefined,options);
    const endTimeStr=(new Date(end)).toLocaleDateString(undefined,options);


    if (startTimeStr === endTimeStr){
        return <h4>{startTimeStr}</h4>
    }
    else{
        return <h4>{startTimeStr} - {endTimeStr}</h4>
    }
}

interface SkillsBoxProps {
    readonly title:string|null;
    readonly skills:ReadonlyArray<ProjectTag>;
}
export function SkillsBox({title,skills}:SkillsBoxProps){

    const links=skills.map((skill,idx)=>{
        return <div key={idx}>
            <Link href={`/skills/${skill}`}>{skill}</Link>
        </div>;
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

        return <AnimatePresence key={idx}  >
            <motion.div layout transition={{delay:delayOffset}} initial={{ opacity: 0 }}  animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Link href={`/skills/${skill}`}>{skill}</Link>
            </motion.div>
        </AnimatePresence>;
    });
    let body=<motion.div layout className={className} >
        <motion.div className="skillsBox" layout >
            {links}
        </motion.div>
        <button className="collapseButton" onClick={()=>setIsCollapsed(!isCollapsed)}>{buttonContent}</button>
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