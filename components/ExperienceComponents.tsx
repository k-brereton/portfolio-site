import {FunctionComponent, MouseEvent, useState} from "react";
import {Media, Modal} from "react-bootstrap";
// @ts-ignore
import style from "./ExperienceComponents.module.scss";
import Image from "next/image";
import {CollapsableSkillsBox, GitHubIcon, SkillsBox} from "./CommonComponents";
import {AnimateSharedLayout, motion, Variants} from "framer-motion";
import Link from "next/link";
import {createDisappearingVariant, createExpandingVariant, createMovingVariant} from "./animations";

export const ALL_PROJECT_TAGS=["C++","C","Java","Android",
"Python","Pandas.py","NumPy","Django","Django Rest Framework",
"Apache Spark","Machine Learning","Natural Language Processing","DataBricks",
"SQL","MySQL","PostgreSQL","MongoDB",
"JavaScript","TypeScript","React.js","CSS","HTML","JSON",
"Next.js","SASS",
"Node.js","Socket.io","JSON Schema",
"PHP","Laravel",
"VBA",
"Unit Testing","Jest","pytest",
"WebSockets","REST API",
"Git","GitHub","BitBucket"] as const;

export type ProjectTag=typeof ALL_PROJECT_TAGS[number];


export interface CompanyData {
    readonly logo:string
    readonly url:string
}

export interface ProjectData  {
    readonly title:string;
    readonly company:string;
    readonly company_data:CompanyData|null;
    readonly github_link:string|null;
    readonly start:string;
    readonly end:string;
    readonly component:FunctionComponent;
    readonly tags:ReadonlyArray<ProjectTag>;
    readonly showTags:boolean;
    readonly componentAnimationDuration:number;
}

interface ProjectComponentBodyProps {
    projectData:ProjectData,
}


interface JobTitleProps {
    title: string;
    company: string;
    start: string;
    end: string;
    githubLink: string | null;
}

interface TimeRangeComponentProps {
    start: string;
    end: string;
}

function TimeRangeComponent({start, end}: TimeRangeComponentProps) {
    if (start > end) {
        throw new Error("Error, inputted time invalid")
    }

    const options: Intl.DateTimeFormatOptions = {month: "short", year: "numeric", timeZone: "UTC"}
    const startTimeStr = (new Date(start)).toLocaleDateString(undefined, options);
    const endTimeStr = (new Date(end)).toLocaleDateString(undefined, options);


    if (startTimeStr === endTimeStr) {
        return <div> {startTimeStr} </div>
    } else {
        return <div>{startTimeStr} - {endTimeStr}</div>
    }
}

function JobTitle({title, company, start, end, githubLink}: JobTitleProps) {
    return <div className={style.jobTitleArea}>
        <div className={style.jobTitleRow}>
            <h2>{title}</h2>
            {githubLink !== null && <GitHubIcon href={githubLink} className={style.jobTitleGithub}/>}
        </div>
        <div className={style.jobTitleCompanyRow}>
            <div>{company}</div>
            <TimeRangeComponent start={start} end={end}/>
        </div>
    </div>
}

export function ProjectComponentBody({projectData}:ProjectComponentBodyProps) {
    const {component:Component,end,company_data,company,start,title, tags, componentAnimationDuration,showTags, github_link} = projectData;
    let skillBox=null;
    const skillBoxDuration=showTags?0:0.3;
    const titleDuration=0.2;

    if(showTags){
        skillBox=<CollapsableSkillsBox skills={tags} className={style.expSkillBox} delay={componentAnimationDuration}/>
    }

    if(company_data !== null){
        return <>
            <motion.div layout variants={createMovingVariant("y",50, titleDuration,undefined,{delay:componentAnimationDuration+skillBoxDuration})}>
                <Media>
                    <motion.div layout>
                        <a href={company_data.url}>
                            <Image layout={"fixed"} src={company_data.logo} width={64} height={64} alt={`${company} logo`} />
                        </a>
                    </motion.div>
                    <Media.Body>
                        <motion.div layout>
                            <JobTitle githubLink={github_link} title={title} company={company} start={start} end={end}/>
                        </motion.div>
                    </Media.Body>
                </Media>
            </motion.div>
        <motion.div variants={createDisappearingVariant(0.1,{staggerChildren:0.1,delay:titleDuration},{staggerChildren:0.1, staggerDirection:-1,delay:skillBoxDuration})} layout>
            <Component />
        </motion.div>
        {skillBox}
        </>
    }
    else{
        return <>
            <motion.div layout>
                <JobTitle githubLink={github_link} title={title} company={company} start={start} end={end}/>
                <Component />
            </motion.div>
            {skillBox}
        </>;
    }

}

const PROJECT_VARIANT:Variants=createExpandingVariant(0);
const TEXT_VARIANT:Variants=createDisappearingVariant(0.3);

export function ProjectComponent({projectData}:{projectData:ProjectData}){
    return <motion.div className={style.expComponent} layout variants={PROJECT_VARIANT}>
           <ProjectComponentBody projectData={projectData}/>
        </motion.div>
}


export const resumeSiteData:ProjectData={
    title:"Portfolio Site",
    company:"Personal Project",
    company_data:null,
    github_link:"https://github.com/k-brereton/portfolio-site",
    start:"2021-05-01",
    end:"2021-05-01",
    component:ResumeSiteComponent,
    tags:["React.js","Next.js","TypeScript","SASS","GitHub","JavaScript","CSS", "HTML","Git"],
    showTags:true,
    componentAnimationDuration:.3
}
export function ResumeSiteComponent() {
    return <div className={style.explanation} > Created the site you are on right now using Next.js and Typescript </div>
}

export const comOptionAnalyticsData:ProjectData={
    title:"ComOptionAnalytics",
    company:"National Bank of Canada",
    company_data:{logo:"/images/nbc_logo.png",url:"https://www.nbc.ca/"},
    github_link:null,
    start:"2019-06-01",
    end:"2020-08-01",
    component:ComOptionAnalyticsComponent,
    tags:["Python","React.js","MySQL", "Django", "WebSockets", "pytest", "Django Rest Framework","JSON Schema","JavaScript", "REST API", "HTML","CSS", "Unit Testing","JSON", "SQL","VBA", "C++"],
    showTags:true,
    componentAnimationDuration:.3
}


export function ComOptionAnalyticsComponent () {
    return <>
        <div className={style.explanation} > Created the ComOptionAnalytics system for one of the banks hedge funds. This system analyzes option contracts, giving real time pricing and risk profiles</div>
        <div className={style.explanation}>
            <div> This system includes:</div>
            <ul>
                <li>A central server which pulls market data from various sources to provide real time data analysis</li>
                <li>A tool for volatility surface calibration. Using this tool, traders can calibrate their volatility surfaces to the market using a variety of methodologies. This includes calibration based on term structures, volatility smiles and seasonal decay</li>
                <li>A pricing engine which evaluated options in real time. The optimized pricing engine was implemented in multithreaded C++, to keep the system up to date with volatile markets </li>
                <li>A tool for analyzing potential trades</li>
                <li>Several more tools for gathering, evaluating, and analyzing market data</li>
            </ul>
            </div>
        <div className={style.explanation}>Applied his knowledge of test-driven development, requirements engineering, and MVC architecture to make the ComOptionAnalytics system fast, accurate and easy to use</div>
    </>
}

export const riskManagerData:ProjectData={
    title:"Risk Manager (Capstone)",
    company:"National Bank of Canada",
    company_data:{logo:"/images/nbc_logo.png",url:"https://www.nbc.ca/"},
    github_link:null,
    start:"2020-09-01",
    end:"2021-04-01",
    component:RiskManagerComponent,
    tags:["React.js","TypeScript", "Unit Testing", "Jest","CSS", "JSON Schema","GitHub", "JSON", "HTML","JavaScript","Git"],
    showTags:true,
    componentAnimationDuration:.3
}

export function RiskManagerComponent() {
    return <>
        <div className={style.explanation} > Lead a small team to create a software system for traders to manage their portfolio risk in real time</div>
        <div className={style.explanation}> Designed code architecture, and implemented core features</div>
        <div className={style.explanation}> Organized and motivated the development team, while providing code reviews, guidance, and knowledge to ensure the project ran smoothly</div>
    </>
}

export const chessOnTheGoData:ProjectData={
    title:"Chess On the Go",
    company:"School Project",
    company_data:null,
    github_link:"https://github.com/yashharanb/ChessOnTheGo",
    start:"2020-09-01",
    end:"2020-12-01",
    component:ChessOnTheGoComponent,
    tags:["React.js","TypeScript","MongoDB","Node.js", "Socket.io", "CSS", "JSON Schema","GitHub", "JSON", "HTML","JavaScript","Git"],
    showTags:true,

    componentAnimationDuration:.3
}


export function ChessOnTheGoComponent() {
    return <>
            <div className={style.explanation} > Co-created an online chess platform  using Typescript, React.js, MongoDB, Express.js and Socket.io </div>
            <div className={style.explanation} > The website featured the full competitive chess ruleset, skill-based matchmaking, Elo rankings, and several game modes  </div>
            <div className={style.explanation} > Kevin implemented the majority of the server code using Node.js, Express.js and Socket.io </div>
        </>
}

export const faultLocalizationToolData:ProjectData={
    title:"Fault Localization Tool",
    company:"School Project",
    company_data:null,
    github_link:null,
    start:"2020-09-01",
    end:"2020-12-01",
    component:FaultLocalizationToolComponent,
    tags:["Machine Learning", "Natural Language Processing","Pandas.py","NumPy", "Python","Git"],
    showTags:true,
    componentAnimationDuration:.3
}


export function FaultLocalizationToolComponent(){
    return <>
            <div className={style.explanation} > Co-created a Fault Localization tool that detects where a software bug is located in the source code of a software project using machine learning  </div>
            <div className={style.explanation}> The tool searched for a bug described in a bug report and predicted the files that needed fixing </div>
            <div className={style.explanation}> Kevin implemented the machine learning models using a methodology found within academic research  </div>
        </>
}

export const amazonReviewAnalyzerData:ProjectData={
    title:"Amazon Review Analyzer",
    company:"School Project",
    company_data:null,
    github_link:null,
    start:"2020-09-01",
    end:"2020-12-01",
    component:AmazonReviewAnalysis,
    tags:["Apache Spark","Machine Learning", "Natural Language Processing", "Python", "DataBricks"],
    showTags:true,
    componentAnimationDuration:.3
}

export function AmazonReviewAnalysis(){
    return <>
        <div className={style.explanation} > Collaborated with 3 others to create a sentiment analysis tool for amazon reviews </div>
        <div className={style.explanation} > The tool analyzed product reviews to detect whether the reviewer felt positively or negatively about the product </div>
        <div className={style.explanation}> The tool is horizontally and vertically scalable, and it could potentially handle terabytes of information at once </div>
    </>
}

export const twitchVidsData:ProjectData={
    title:"TwitchVids",
    company:"School Project",
    company_data:null,
    github_link:"https://github.com/k-brereton/Seng401FinalProject",
    start:"2019-01-01",
    end:"2019-03-01",
    component:TwitchVidsComponent,
    tags:["PHP","Laravel","HTML","CSS", "JavaScript","SQL","PostgreSQL","GitHub","Git"],
    showTags:true,
    componentAnimationDuration:.3
}


export function TwitchVidsComponent() {
    return <>
        <div className={style.explanation} >
            Co-created website which is YouTube but for Twitch clips. Users can see the latest highlights from their favorite streamers by subscribing to them. This was implemented using the Laravel Framework
        </div>
        <div className={style.explanation}>
            Implemented the majority of the server code, including the Laravel models, controllers, and the Twitch API integration
        </div>
    </>
}

export const carVisualizerData:ProjectData={
    title:"Car Visualizer",
    company:"School Project",
    company_data:null,
    github_link:"https://github.com/k-brereton/Seng471Prototype",
    start:"2019-01-01",
    end:"2019-03-01",
    component:CarVisualizerComponent,
    tags:["PHP","Laravel","HTML","CSS", "JavaScript","SQL","PostgreSQL"],
    showTags:true,
    componentAnimationDuration:.3
}

export function CarVisualizerComponent() {
    return <>
        <div className={style.explanation} >Collaborated with 4 others to create a website for car customization. The website allows users to choose what cars they want to buy, and select colors, etc</div>
        <div className={style.explanation}>
            Implemented the majority of the server code, including the Laravel models and controllers
        </div>
    </>

}

export const parkingManagementData:ProjectData={
    title:"Parking Data Management System",
    company:"Personal Project",
    company_data:null,
    github_link:null,
    start:"2018-04-01",
    end:"2018-08-01",
    component:ParkingDataManagementSystemComponent,
    tags:["Java","Android","MySQL","SQL","BitBucket"],
    showTags:true,
    componentAnimationDuration:.3
}

export function ParkingDataManagementSystemComponent() {
    return <>
        <div className={style.explanation}>Collaborated with 3 people to create a highly modular Java Swing application for collecting and organizing data from parking security companies. His efforts resulted in an expandable and easy to use software core to base further projects off of</div>
        <div className={style.explanation}>Designed a Self-Checking Database core which automatically detects data Integrity flaws, creating an easy to use and intuitive database communication</div>
        <div className={style.explanation}>Expanded his knowledge by porting the system over to android</div>
    </>
}

export const bookOrderingSystemData:ProjectData={
    title:"Book Ordering System",
    company:"School Project",
    company_data:null,
    github_link:null,
    start:"2018-09-01",
    end:"2018-12-01",
    component:BookOrderingSystemComponent,
    tags:["Java","MySQL","SQL","BitBucket"],
    showTags:true,
    componentAnimationDuration:.3
}
export function BookOrderingSystemComponent() {
    return <div className={style.explanation} >
        <div className={style.explanation} >Re-used the framework from the Parking Data Management system to implement a Book Ordering System </div>
    </div>
}

export const desireToLoveData:ProjectData={
    title:"Desire2Love (D2L)",
    company:"School Project",
    company_data:null,
    github_link:null,
    start:"2018-01-01",
    end:"2018-04-01",
    component:DesireToLoveComponent,
    tags:["Java","MySQL","SQL","BitBucket"],
    showTags:true,
    componentAnimationDuration:.3
}

export function DesireToLoveComponent() {
    return <>
        <div className={style.explanation}>
            Co-created a love themed d2l site. Students could view content for their courses, submit assignments, and participate in online message boards with other other students.
        </div>
        <div className={style.explanation} >
            Kevin implemented A multi-purpose Server communication system which allowed for easy communication
            between the front end and back end. His system made all database interaction a breeze, and
            allowed for a messaging service to be implemented into the application
        </div>
    </>
}

export const reactMiscData:ProjectData={
    title:"Additional Experience",
    company:"School Projects",
    company_data:null,
    github_link:null,
    start:"2020-09-01",
    end:"2020-12-01",
    component:ReactMisc,
    tags:["JavaScript","TypeScript","React.js", "Node.js", "CSS"],
    showTags:false,
    componentAnimationDuration:.3
}

export function ReactMisc() {
    return <div className={style.explanation} >
        Implemented various other smaller websites using React.js, Javascript and Typescript. The most fun example is the game
        <a href="https://k-brereton.github.io/mine-sweeper/build/"> Minesweeper</a>
    </div>
}

export const cppMiscData:ProjectData={
    title:"Additional C++ Experience",
    company:"School Projects",
    company_data:null,
    github_link:null,
    start:"2017-09-01",
    end:"2021-04-01",
    component:CppMiscComponent,
    tags:["C++","C"],
    showTags:false,
    componentAnimationDuration:.3
}
export function CppMiscComponent() {
    return <>
        <div className={style.explanation} > Implemented various smaller C and C++ projects, including:</div>
        <ul className={style.explanation}>
            <li>An HTTP proxy server</li>
            <li>A small compression engine</li>
            <li>Various embedded systems, such as a remote for a remote controlled car </li>
            <li>Many different algorithm implementations and smaller assignments</li>
        </ul>
        <div className={style.explanation} >
            This work has given Kevin excellent understanding of advanced C++ concepts such as templates, and a strong understanding of systems/embedded programming
        </div>
    </>
}

export const pandasMiscData:ProjectData={
    title:"Additional Experience",
    company:"School Projects",
    company_data:null,
    github_link:null,
    start:"2020-09-01",
    end:"2021-04-01",
    component:PandasMiscComponent,
    tags:["NumPy","Pandas.py"],
    showTags:false,
    componentAnimationDuration:.3
}
export function PandasMiscComponent(){
    return <div className={style.explanation} >  Worked on various smaller assignments using NumPy and Pandas.py </div>
}

export const javaMiscData:ProjectData={
    title:"Additional Java Experience",
    company:"School Projects",
    company_data:null,
    github_link:null,
    start:"2016-09-01",
    end:"2018-12-01",
    component:JavaMiscComponent,
    tags:["Java"],
    showTags:false,
    componentAnimationDuration:.3
}
export function JavaMiscComponent() {
    return <>
        <div className={style.explanation} >Used Java for many smaller assignments. This work has given Kevin a strong understanding of advanced techniques like Generics and lambdas </div>
        <div className={style.explanation}>
            While the majority of his work was in Java 8, he has done extensive research into modern java techniques such as Var and Records. He has also taken an interest in the future direction of the language
            (ie <a href="https://openjdk.java.net/projects/valhalla/"> Project Valhalla</a> and
            <a href="https://wiki.openjdk.java.net/display/loom/Main"> Project Loom</a>)
        </div>
    </>
}


/**
 * Data structure which holds every project in my resume, sorted in the order the skill pages want them to be in.
 * Earlier in the data structure means it appears earlier on the page.
 */
export const PROJECT_DATA:ReadonlyArray<ProjectData>=[
    comOptionAnalyticsData,
    riskManagerData,

    chessOnTheGoData,
    faultLocalizationToolData,
    amazonReviewAnalyzerData,

    twitchVidsData,
    carVisualizerData,

    parkingManagementData,
    bookOrderingSystemData,
    desireToLoveData,

    resumeSiteData,

    reactMiscData,
    pandasMiscData,
    javaMiscData,
    cppMiscData,
];

export const NBC_INTERNSHIP_DATA: ProjectData = {
    company_data: {logo: "/images/nbc_logo.png", url: "https://www.nbc.ca/"},
    title: "Software Developer Intern",
    start: "2019-06-01",
    end: "2020-08-01",
    company: "National Bank of Canada",
    tags: [],
    showTags:false,
    componentAnimationDuration:.3,
    github_link: null,
    component: NBCInternship,
}

function NBCInternship() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onComOptionAnalyticsClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setIsModalOpen(true);
    };

    return <>
            <Modal size="xl" show={isModalOpen} onHide={() => setIsModalOpen(false)}>
                <AnimateSharedLayout>
                    <Modal.Header closeButton />
                    <motion.div layout initial="beforePageLoad" animate="pageLoaded" exit="pageExit">
                        <Modal.Body>
                            <ProjectComponentBody projectData={comOptionAnalyticsData}/>
                        </Modal.Body>
                    </motion.div>
                </AnimateSharedLayout>
            </Modal>
        <motion.div className={style.explanation} layout variants={TEXT_VARIANT}> Created the <a href="/projects" onClick={onComOptionAnalyticsClick}>ComOptionAnalytics system</a> for one of the banks hedge
            funds. This system analyzes option contracts, giving real time pricing and risk profiles
        </motion.div>
        <motion.div className={style.explanation} layout variants={TEXT_VARIANT}> Refined his software architecture skills to create cohesive and high-quality code using the object-oriented and functional
            programming paradigms
        </motion.div>
        <motion.div className={style.explanation} layout variants={TEXT_VARIANT}> Helped interview and analyze candidates for the next years internship</motion.div>
    </>
}

export const SCHULICH_IGNITE_DATA: ProjectData = {
    company_data: {logo: "/images/ignite.svg", url: "https://schulichignite.com/"},
    title: "Volunteer Teacher",
    start: "2018-02-01",
    end: "2020-01-01",
    company: "Schulich Ignite",
    tags: [],
    showTags:false,
    componentAnimationDuration:.1,
    github_link: null,
    component: SchulichIgnite,

}

function SchulichIgnite() {
    return <motion.div className={style.explanation} layout variants={TEXT_VARIANT}>Explained complicated programming concepts to students so they could program games</motion.div>
}

export const UNIVERSITY_OF_CALGARY_DATA: ProjectData = {
    company_data: {logo: "/images/ucalgary.png", url: "https://www.ucalgary.ca/"},
    title: "Bachelor of Science in Software Engineering",
    start: "2015-09-01",
    end: "2021-05-01",
    company: "University of Calgary",
    tags: [],
    showTags:false,
    componentAnimationDuration:.2,
    github_link: null,
    component: UniversityOfCalgary,
}

function UniversityOfCalgary() {
    return <>
        <motion.div className={style.explanation} layout variants={TEXT_VARIANT}>GPA: 3.94 / 4</motion.div>
        <motion.div className={style.explanation} layout variants={TEXT_VARIANT}>Created many <Link href="/projects">projects</Link> for different courses</motion.div>
    </>
}