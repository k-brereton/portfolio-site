import {FunctionComponent} from "react";
import {Container, Jumbotron, Media} from "react-bootstrap";
// @ts-ignore
import style from "./ProjectComponents.module.scss";
import Image from "next/image";
import {TimeRangeComponent} from "./CommonComponents";

export type ProjectTag="C++"|"C"|"Java"|
    "Python"|"Pandas.py"|"NumPy"|"Django"|"Django Rest Framework"|
    "Apache Spark"|"Machine Learning"|"Natural Language Processing"|
    "SQL"|"MySQL"|"PostgreSQL"|"MongoDB"|
    "JavaScript"|"TypeScript"|"React.js"|"CSS"|"HTML"|"JSON"|
    "Next.js"|"SASS"|
    "Node.js"|"Socket.io"|"JSON Schema"|
    "PHP"|"Laravel"|
    "VBA"|
    "Unit Testing"|"Jest"|"pytest"|
    "WebSockets"|"REST API";

interface ProjectData  {
    readonly title:string;
    readonly company:string;
    readonly company_logo:string|null;
    readonly start:string;
    readonly end:string;
    readonly component:FunctionComponent;
    tags:ReadonlyArray<ProjectTag>;
    showTags:boolean;
}

interface ProjectComponentProps {
    projectData:ProjectData
}


export function ProjectComponent({projectData}:ProjectComponentProps){
    const {component,end,company_logo,company,start,title} = projectData;
    let body =<>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <TimeRangeComponent start={start} end={end}/>
        {component}
    </>;
    if(company_logo !== null){
        body=            <Media>
            {company_logo&& <Image src={company_logo} width={64} height={64} alt={`${company} logo`}/>}
            <Media.Body>
                {body}
            </Media.Body>
        </Media>
    }

    return <Jumbotron>
        <Container>
            {body}
        </Container>
    </Jumbotron>
}


export const resumeSiteData:ProjectData={
    title:"Portfolio Site",
    company:"Personal Project",
    company_logo:null,
    start:"2021-05-01",
    end:"2021-05-01",
    component:ResumeSiteComponent,
    tags:["React.js","Next.js","TypeScript","JavaScript","SASS","CSS", "HTML"],
    showTags:true
}
export function ResumeSiteComponent() {
    return <>
        <div className={style.projectExplanation} > A system which analyzes option contracts for one of the National Bank of Canada's hedge funds. It provides real time pricing and risk profiles for options across various markets</div>
        <div> This system includes:</div>
        <ul>
            <li>A central server, which pulled data from trading platforms, and various other sources to provide a real time data feed of evaluated options. The server provided a WebSocket API and a REST API for the other tools to use as their data source. This server was implemented using Python, Django, and MySQL.</li>
        </ul>
    </>
}

export const comOptionAnalyticsData:ProjectData={
    title:"ComOptionAnalytics",
    company:"National Bank of Canada",
    company_logo:"/images/nbc_logo.png",
    start:"2019-06-01",
    end:"2020-08-01",
    component:ComOptionAnalyticsComponent,
    tags:["Python","React.js","MySQL", "Django", "WebSockets", "pytest", "Django Rest Framework","JSON Schema","JavaScript", "REST API", "HTML","CSS", "Unit Testing","JSON", "SQL","VBA", "C++"],
    showTags:true
}

export function ComOptionAnalyticsComponent () {
    return <>
        <div className={style.projectExplanation} > A system which analyzes option contracts for one of the National Bank of Canada's hedge funds. It provides real time pricing and risk profiles for options across various markets</div>
        <div> This system includes:</div>
        <ul>
            <li>A central server, which pulled data from trading platforms, and various other sources to provide a real time data feed of evaluated options. The server provided a WebSocket API and a REST API for the other tools to use as their data source. This server was implemented using Python, Django, and MySQL.</li>
        </ul>
    </>
}

export const riskManagerData:ProjectData={
    title:"Risk Manager",
    company:"National Bank of Canada",
    company_logo:"/images/nbc_logo.png",
    start:"2020-09-01",
    end:"2021-04-01",
    component:RiskManagerComponent,
    tags:["React.js","TypeScript", "Unit Testing", "Jest","CSS", "JSON Schema", "JSON", "HTML","JavaScript"],
    showTags:true
}

export function RiskManagerComponent() {
    return <>
        <div className={style.projectExplanation} > A system which allows traders to manage their portfolio risk in real time. This system is an expansion of Kevin’s previous work with the Bank.</div>
        <div className={style.projectExplanation} > ... more elaboration on what it does.</div>
        <div className={style.projectExplanation} > Lead a small team to create a risk management system for the National Bank of Canada, using Typescript and React.js. </div>
        <div className={style.projectExplanation}> Designed code architecture, and implemented core features</div>
        <div className={style.projectExplanation}> Organized and motivated the development team, while providing code reviews, guidance, and knowledge to ensure the project ran smoothly</div>
    </>
}

export const chessOnTheGoData:ProjectData={
    title:"Chess On the Go",
    company:"School Project",
    company_logo:null,
    start:"2020-09-01",
    end:"2020-12-01",
    component:ChessOnTheGoComponent,
    tags:["React.js","TypeScript","MongoDB","Node.js", "Socket.io", "CSS", "JSON Schema", "JSON", "HTML","JavaScript"],
    showTags:true
}


export function ChessOnTheGoComponent() {
    return <div className={style.projectExplanation} > chessOnTheGo </div>
}

export const faultLocalizationToolData:ProjectData={
    title:"Fault Localization Tool",
    company:"School Project",
    company_logo:null,
    start:"2020-09-01",
    end:"2020-12-01",
    component:FaultLocalizationToolComponent,
    tags:["Machine Learning", "Natural Language Processing","Pandas.py","NumPy", "Python"],
    showTags:true
}


export function FaultLocalizationToolComponent(){
    return <div className={style.projectExplanation} > fault localization Tool </div>;
}

export const amazonReviewAnalyzerData:ProjectData={
    title:"Amazon Review Analyzer",
    company:"School Project",
    company_logo:null,
    start:"2020-09-01",
    end:"2020-12-01",
    component:AmazonReviewAnalysis,
    tags:["Apache Spark","Machine Learning", "Natural Language Processing", "Python"],
    showTags:true
}

export function AmazonReviewAnalysis(){
    return <div className={style.projectExplanation} > Amazon Review stuff </div>
}

export const twitchVidsData:ProjectData={
    title:"TwitchVids",
    company:"School Project",
    company_logo:null,
    start:"2019-01-01",
    end:"2019-03-01",
    component:TwitchVidsComponent,
    tags:["PHP","Laravel","HTML","CSS", "JavaScript","SQL","PostgreSQL"],
    showTags:true
}


export function TwitchVidsComponent() {
    return <div className={style.projectExplanation} >Twitch Vids </div>
}

export const carVisualizerData:ProjectData={
    title:"Car Visualizer",
    company:"School Project",
    company_logo:null,
    start:"2019-01-01",
    end:"2019-03-01",
    component:CarVisualizerComponent,
    tags:["PHP","Laravel","HTML","CSS", "JavaScript","SQL","PostgreSQL"],
    showTags:true
}

export function CarVisualizerComponent() {
    return <div className={style.projectExplanation} >Car Visualizer </div>
}

export const parkingManagementData:ProjectData={
    title:"Parking Data Management System",
    company:"Personal Project",
    company_logo:null,
    start:"2018-04-01",
    end:"2018-08-01",
    component:ParkingDataManagementSystemComponent,
    tags:["Java","MySQL","SQL"],
    showTags:true
}

export function ParkingDataManagementSystemComponent() {
    return <div className={style.projectExplanation} >Parking data </div>;
}

export const libraryManagementData:ProjectData={
    title:"Library Management System",
    company:"School Project",
    company_logo:null,
    start:"2018-09-01",
    end:"2018-12-01",
    component:LibraryManagementSystemComponent,
    tags:["Java","MySQL","SQL"],
    showTags:true
}
export function LibraryManagementSystemComponent() {
    return <div className={style.projectExplanation} >Library management system </div>
}

export const desireToLoveData:ProjectData={
    title:"Desire 2 Love (D2L)",
    company:"School Project",
    company_logo:null,
    start:"2018-01-01",
    end:"2018-04-01",
    component:DesireToLoveComponent,
    tags:["Java","MySQL","SQL"],
    showTags:true
}

export function DesireToLoveComponent() {
    return <div className={style.projectExplanation} >Desire 2 Love </div>
}

export const sparkMiscData:ProjectData={
    title:"Transferable Spark Experience",
    company:"Personal Experience",
    company_logo:null,
    start:"2020-09-01",
    end:"2021-04-01",
    component:SparkMiscComponent,
    tags:["Apache Spark"],
    showTags:true
}

export function SparkMiscComponent() {
    return <div className={style.projectExplanation} >Misc Spark </div>
}

export const reactMiscData:ProjectData={
    title:"Additional Experience",
    company:"School Projects",
    company_logo:null,
    start:"2020-09-01",
    end:"2020-12-01",
    component:ReactMisc,
    tags:["JavaScript","TypeScript","React.js", "Node.js", "CSS"],
    showTags:false
}

export function ReactMisc() {
    return <div className={style.projectExplanation} >Misc React </div>
}

export const cppMiscData:ProjectData={
    title:"Additional C++ Experience",
    company:"School Projects",
    company_logo:null,
    start:"2017-09-01",
    end:"2021-04-01",
    component:CppMiscComponent,
    tags:["C++","C"],
    showTags:false
}
export function CppMiscComponent() {
    return <div className={style.projectExplanation} >  misc c++ stuff</div>
}

export const pandasMiscData:ProjectData={
    title:"Additional Experience",
    company:"School Projects",
    company_logo:null,
    start:"2020-09-01",
    end:"2021-04-01",
    component:PandasMiscComponent,
    tags:["NumPy","Pandas.py"],
    showTags:false
}
export function PandasMiscComponent(){
    return <div className={style.projectExplanation} >  misc numpy stuff</div>
}

export const javaMiscData:ProjectData={
    title:"Additional Java Experience",
    company:"School Projects",
    company_logo:null,
    start:"2016-09-01",
    end:"2018-12-01",
    component:JavaMiscComponent,
    tags:["Java"],
    showTags:false
}
export function JavaMiscComponent() {
    return <div className={style.projectExplanation} >Misc Java </div>
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
    libraryManagementData,
    desireToLoveData,

    resumeSiteData,

    sparkMiscData,
    reactMiscData,
    pandasMiscData,
    javaMiscData,
    cppMiscData,
]