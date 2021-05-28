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
        <meta name="og:title" content="Kevin Brereton Resume" />
        <meta name="twitter:card" content="summary_large_image" />
        {/*todo get rid of this*/}
        <meta name="google-site-verification" content="64aEDzrlDr6ennXmXHf71EGk7QMxbs9YSFd_gZ66qr4" />

        <title>{title}</title>
    </Head>
}

export function GitHubIcon({href,className}:{href:string, className:string}) {
    return <a href={href} className="contactIcon"> <RiGithubFill className={className} title="Github Link"/> </a>;
}

export function ContactMediaBar({showAboutLink, iconClassName}:{showAboutLink:boolean,iconClassName:string}) {
    //hardcoded sizes, due to library.
    return <div>
            <a href="https://www.linkedin.com/in/kevin-brereton/" className="contactIcon"> <RiLinkedinBoxFill className={iconClassName} title="Linkedin Link"/> </a>
            <GitHubIcon href="https://github.com/k-brereton/" className={iconClassName}/>
            {
                showAboutLink && <Link scroll={false} href="/about" passHref>
                    <a className="contactIcon"> <RiPhoneFill className={iconClassName} title="About Link" /> </a>
                </Link>
            }
        </div>
}



const SKILL_LINK_VARIANT=createDisappearingVariant(0.3);

interface SkillsBoxProps {
    readonly title:string|null;
    readonly skills:ReadonlyArray<ProjectTag>;
    readonly delay:number;
}
export function SkillsBox({title,skills, delay}:SkillsBoxProps){
    const links=skills.map((skill)=>{
        return <motion.div key={skill} variants={SKILL_LINK_VARIANT}>
            <Link scroll={false} href={`/skills/${skill}`}>{skill}</Link>
        </motion.div>;
    });

    const skillBoxVariant=createVerticalExpandingVariant({staggerChildren:0.03333,delay}, {staggerChildren:0.03333,staggerDirection:-1});
    const titleVariant=createDisappearingVariant(0.5,{delay:delay+0.3},{delay:0.3});

    if(title===null){
        return <motion.div variants={skillBoxVariant} className="skillsBox" >{links}</motion.div>
    }

    else{
        return <motion.div className="skillsBoxWrapper" >
            <motion.h2 variants={titleVariant} className="skillsBoxTitle">
                {title}
            </motion.h2>
            <motion.div variants={skillBoxVariant} className="skillsBox">{links}</motion.div>
        </motion.div>
    }
}

interface CollapsableSkillsBoxProps{
    readonly skills:ReadonlyArray<ProjectTag>;
    readonly className:string;
}

export function CollapsableSkillsBox({skills,className}: CollapsableSkillsBoxProps) {

    const [isCollapsed,setIsCollapsed]=useState(true);
    const shownSkills=isCollapsed? skills.slice(0, 3):skills;
    const buttonContent=isCollapsed? "+" : "-"

    const links=shownSkills.map((skill,idx)=>{
        const delayOffset=Math.floor(idx/3)*0.1;
        const delayObject=delayOffset===0? undefined:{delay:delayOffset}
        const variants=createDisappearingVariant(0.3,delayObject);
        return <AnimatePresence key={skill}>
            <motion.div layout variants={variants}>
                <Link scroll={false} href={`/skills/${skill}`}>{skill}</Link>
            </motion.div>
        </AnimatePresence>;
    });
    const variant=createVerticalExpandingVariant();
    return <motion.div layout className={`collapsableSkillsBoxOuter ${className}`} variants={variant} >
        <motion.div className="skillsBox" layout >
            {links}
        </motion.div>
        <motion.div layout className="collapseButton" onClick={()=>setIsCollapsed(!isCollapsed)}>{buttonContent}</motion.div>
    </motion.div>;
}

export const EXP_PAGE_TITLE_VARIANT=createDisappearingVariant(0.5,{delay:0.4},{delay:0.3})