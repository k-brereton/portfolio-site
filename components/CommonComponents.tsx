import Head from 'next/head';
import Link from "next/link";
import {RiGithubFill, RiLinkedinBoxFill, RiPhoneFill} from "react-icons/ri";
import {ProjectTag} from "./ProjectComponents";

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

export function GitHubIcon({href}:{href:string}) {
    return <a href={href} className="contactIcon"> <RiGithubFill size={ICON_SIZE}/> </a>;
}

export function ContactMediaBar({showAboutLink}:{showAboutLink:boolean}) {
    //forced hardcoded sizes, due to library.
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
    readonly skills:ProjectTag[][];
    readonly className:string;
}
export function SkillsBox({title,skills,className}:SkillsBoxProps){
    if(skills.length!== 3){
        throw new Error("error, skills must be a 3 X (height) array")
    }
    const links=skills.flatMap(skillGroup=>skillGroup.map(skill=>{
        return <Link href={`/projects/${skill}`} >{skill}</Link>
    }))
    return <div className={className}>{links}</div>
}