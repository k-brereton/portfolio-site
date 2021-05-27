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



const SKILL_LINK_VARIANT=createDisappearingVariant(0.3);

interface SkillsBoxProps {
    readonly title:string|null;
    readonly skills:ReadonlyArray<ProjectTag>;
    readonly animatable:boolean;
    readonly delay:number;
}
export function SkillsBox({title,skills, animatable, delay}:SkillsBoxProps){
    const links=skills.map((skill)=>{
        return <motion.div key={skill} variants={animatable?SKILL_LINK_VARIANT:undefined}>
            <Link href={`/skills/${skill}`}>{skill}</Link>
        </motion.div>;
    });

    const skillBoxVariant=createVerticalExpandingVariant(0.0333,{delay});
    const titleVariant=createDisappearingVariant(0.5,{delay:delay+0.3},{delay:0.3});

    if(title===null){
        return <motion.div variants={animatable?skillBoxVariant:undefined} className="skillsBox" >{links}</motion.div>
    }

    else{
        return <motion.div className="skillsBoxWrapper" >
            <motion.div variants={animatable?titleVariant:undefined} className="skillsBoxTitle">
                {title}
            </motion.div>
            <motion.div variants={animatable?skillBoxVariant:undefined} className="skillsBox">{links}</motion.div>
        </motion.div>
    }
}

interface CollapsableSkillsBoxProps{
    readonly skills:ReadonlyArray<ProjectTag>;
    readonly className:string;
    readonly delay:number;
}

export function CollapsableSkillsBox({skills,className,delay}: CollapsableSkillsBoxProps) {

    const [isCollapsed,setIsCollapsed]=useState(true);
    const shownSkills=isCollapsed? skills.slice(0, 3):skills;
    const buttonContent=isCollapsed? "+" : "-"

    const links=shownSkills.map((skill,idx)=>{
        const delayOffset=Math.floor(idx/3)*0.1;
        const delayObject=delayOffset===0? undefined:{delay:delayOffset}
        const variants=createDisappearingVariant(0.3,delayObject,delayObject);
        return <AnimatePresence key={skill}>
            <motion.div layout variants={variants}>
                <Link href={`/skills/${skill}`}>{skill}</Link>
            </motion.div>
        </AnimatePresence>;
    });
    const variant=createVerticalExpandingVariant(0.0333,{delay});
    return <motion.div layout className={`collapsableSkillsBoxOuter ${className}`} variants={variant} >
        <motion.div className="skillsBox" layout >
            {links}
        </motion.div>
        <motion.div layout className="collapseButton" onClick={()=>setIsCollapsed(!isCollapsed)}>{buttonContent}</motion.div>
    </motion.div>;
}

