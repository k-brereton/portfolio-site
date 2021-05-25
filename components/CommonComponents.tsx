import Head from 'next/head';
import Link from "next/link";
import {RiGithubFill, RiLinkedinBoxFill, RiPhoneFill} from "react-icons/ri";
import {ProjectTag} from "./ExperienceComponents";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {createDisappearingVariant, createVerticalExpandingVariant} from "./animations";

export const VARIANT="dark"
export const ICON_SIZE=30;

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

const TITLE_VARIANT=createDisappearingVariant(0.5,undefined,{delay:0.3});
const EXPANDING_VARIANT=createVerticalExpandingVariant(0);

interface SkillsBoxProps {
    readonly title:string|null;
    readonly skills:ReadonlyArray<ProjectTag>;
    readonly animatable:boolean;
}
export function SkillsBox({title,skills, animatable}:SkillsBoxProps){

    const links=skills.map((skill,idx)=>{
        const delayOffset=Math.floor(idx/3)*0.1;
        const delayObject=delayOffset===0? undefined:{delay:delayOffset}
        const variants=createDisappearingVariant(0.3,delayObject,delayObject);
        return <motion.div key={skill} variants={animatable?variants:undefined}>
            <Link href={`/skills/${skill}`}>{skill}</Link>
        </motion.div>;
    });
    if(title===null){
        return <motion.div variants={animatable?EXPANDING_VARIANT:undefined} className="skillsBox" >{links}</motion.div>
    }
    else{
        return <motion.div className="skillsBoxWrapper" >
            <motion.div variants={animatable?TITLE_VARIANT:undefined} className="skillsBoxTitle">
                {title}
            </motion.div>
            <motion.div variants={animatable?EXPANDING_VARIANT:undefined} className="skillsBox">{links}</motion.div>
        </motion.div>
    }
}

interface CollapsableSkillsBoxProps{
    readonly skills:ReadonlyArray<ProjectTag>;
    className:string;
}


export function CollapsableSkillsBox({skills,className}: CollapsableSkillsBoxProps) {

    const [isCollapsed,setIsCollapsed]=useState(true);
    const shownSkills=isCollapsed? skills.slice(0, 3):skills;
    const buttonContent=isCollapsed? "+" : "-"

    const links=shownSkills.map((skill,idx)=>{
        const delayOffset=Math.floor(idx/3)*0.1;
        const delayObject=delayOffset===0? undefined:{delay:delayOffset}
        const variants=createDisappearingVariant(0.3,delayObject,delayObject);
        return <AnimatePresence key={skill}>
            <motion.div layout  variants={variants}>
                <Link href={`/skills/${skill}`}>{skill}</Link>
            </motion.div>
        </AnimatePresence>;
    });
    return <motion.div layout className={`collapsableSkillsBoxOuter ${className}`} variants={EXPANDING_VARIANT} >
        <motion.div className="skillsBox" layout >
            {links}
        </motion.div>
        <motion.div layout className="collapseButton" onClick={()=>setIsCollapsed(!isCollapsed)}>{buttonContent}</motion.div>
    </motion.div>;
}

