import {FunctionComponent} from "react";
import {Container, Jumbotron, Media} from "react-bootstrap";
// @ts-ignore
import style from "./ProjectComponents.module.scss";
import Image from "next/image";
import {GitHubIcon, TimeRangeComponent} from "./CommonComponents";

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


interface CompanyData {
    readonly logo:string
    readonly url:string
}

interface ProjectData  {
    readonly title:string;
    readonly company:string;
    readonly company_data:CompanyData|null;
    readonly start:string;
    readonly end:string;
    readonly component:FunctionComponent;
    readonly tags:ReadonlyArray<ProjectTag>;
    readonly showTags:boolean;
}

interface ProjectComponentProps {
    projectData:ProjectData
}


export function ProjectComponent({projectData}:ProjectComponentProps){
    const {component:Component,end,company_data,company,start,title} = projectData;
    let body =<>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <TimeRangeComponent start={start} end={end}/>
        <Component />
    </>;
    if(company_data !== null){
        body= <Media>
            <a href={company_data.url}>
                <Image src={company_data.logo} width={64} height={64} alt={`${company} logo`}/>
            </a>
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
    company_data:null,
    start:"2021-05-01",
    end:"2021-05-01",
    component:ResumeSiteComponent,
    tags:["React.js","Next.js","TypeScript","SASS","GitHub","JavaScript","CSS", "HTML","Git"],
    showTags:true
}
export function ResumeSiteComponent() {
    return <>
        <div className={style.projectExplanation} > Created the site you are on right now using Next.js and Typescript </div>
        <div className={style.iconRow}><GitHubIcon href="https://github.com/k-brereton/portfolio-site"/> </div>
    </>
}

export const comOptionAnalyticsData:ProjectData={
    title:"ComOptionAnalytics",
    company:"National Bank of Canada",
    company_data:{logo:"/images/nbc_logo.png",url:"https://www.nbc.ca/"},
    start:"2019-06-01",
    end:"2020-08-01",
    component:ComOptionAnalyticsComponent,
    tags:["Python","React.js","MySQL", "Django", "WebSockets", "pytest", "Django Rest Framework","JSON Schema","JavaScript", "REST API", "HTML","CSS", "Unit Testing","JSON", "SQL","VBA", "C++"],
    showTags:true
}


export function ComOptionAnalyticsComponent () {
    return <>
        <div className={style.projectExplanation} > Created a system which analyzes option contracts for one of the National Bank of Canada's hedge funds. It provides real time pricing and risk profiles for options across various markets</div>
        <div> This system includes:</div>
        <ul>
            <li>A central server, which pulled data from trading platforms, and various other sources to provide a real time data feed of evaluated options. The server provided a WebSocket API and a REST API for the other tools to use as their data source. This server was implemented using Python, Django, and MySQL</li>
            <li>A tool for calibrating volatility surfaces to the market. This tool allowed traders to keep their volatility surfaces up to date with the market using a variety of methodologies. These methodologies include calibration based on term structures, volatility smiles, seasonal decay, and more. This tool was implemented using React.js, React Hooks, and JavaScript</li>
            <li>A pricing engine which evaluated options in real time. The optimized pricing engine was implemented in multithreaded C++, to keep the system up to date with volatile markets </li>
            <li>Several tools for displaying evaluated options from different sources. These tools were implemented using React.js, React Hooks, and JavaScript</li>
            <li>A tool for analyzing potential trades, implemented using React.js, React Hooks, and JavaScript</li>
            <li>A parser which inspects messages from stock brokers and finds each trade the broker sent. Those trades would then be parsed into a data structure, which would be analyzed by the ComOptionAnalytics server. The parser was implemented in python</li>
        </ul>
        <div>Applied his knowledge of test-driven development, requirements engineering, and MVC architecture to make the ComOptionAnalytics system fast, accurate and easy to use</div>
    </>
}

export const riskManagerData:ProjectData={
    title:"Risk Manager",
    company:"National Bank of Canada",
    company_data:{logo:"/images/nbc_logo.png",url:"https://www.nbc.ca/"},
    start:"2020-09-01",
    end:"2021-04-01",
    component:RiskManagerComponent,
    tags:["React.js","TypeScript", "Unit Testing", "Jest","CSS", "JSON Schema","GitHub", "JSON", "HTML","JavaScript","Git"],
    showTags:true
}

export function RiskManagerComponent() {
    return <>
        <div className={style.projectExplanation} > Lead a small team to create a risk management system. The system allows traders to manage their portfolio risk in real time. This system was implemented as a capstone project</div>
        <div className={style.projectExplanation}> Designed code architecture, and implemented core features</div>
        <div className={style.projectExplanation}> Organized and motivated the development team, while providing code reviews, guidance, and knowledge to ensure the project ran smoothly</div>
    </>
}

export const chessOnTheGoData:ProjectData={
    title:"Chess On the Go",
    company:"School Project",
    company_data:null,
    start:"2020-09-01",
    end:"2020-12-01",
    component:ChessOnTheGoComponent,
    tags:["React.js","TypeScript","MongoDB","Node.js", "Socket.io", "CSS", "JSON Schema","GitHub", "JSON", "HTML","JavaScript","Git"],
    showTags:true
}


export function ChessOnTheGoComponent() {
    return <>
            <div className={style.projectExplanation} > Co-created An online chess platform  using Typescript, React.js, MongoDB, Express.js and Socket.io </div>
            <div className={style.projectExplanation} > The website featured the full competitive chess ruleset, skill-based matchmaking, Elo rankings, and several game modes  </div>
            <div className={style.projectExplanation} > Kevin implemented the majority of the server code using Node.js, Express.js and Socket.io </div>
            <div className={style.iconRow}><GitHubIcon href="https://github.com/yashharanb/ChessOnTheGo"/> </div>
        </>
}

export const faultLocalizationToolData:ProjectData={
    title:"Fault Localization Tool",
    company:"School Project",
    company_data:null,
    start:"2020-09-01",
    end:"2020-12-01",
    component:FaultLocalizationToolComponent,
    tags:["Machine Learning", "Natural Language Processing","Pandas.py","NumPy", "Python","GitHub","Git"],
    showTags:true
}


export function FaultLocalizationToolComponent(){
    return <>
            <div className={style.projectExplanation} > Co-created a Fault Localization tool. The tool detects where a software bug is located in the source code of a software project using machine learning  </div>
            <div className={style.projectExplanation}> The tool searched for a bug described in a bug report and predicted the files that needed fixing </div>
            <div className={style.projectExplanation}> Kevin implemented the machine learning models using a methodology found within academic research  </div>
        </>
}

export const amazonReviewAnalyzerData:ProjectData={
    title:"Amazon Review Analyzer",
    company:"School Project",
    company_data:null,
    start:"2020-09-01",
    end:"2020-12-01",
    component:AmazonReviewAnalysis,
    tags:["Apache Spark","Machine Learning", "Natural Language Processing", "Python", "DataBricks"],
    showTags:true
}

export function AmazonReviewAnalysis(){
    return <>
        <div className={style.projectExplanation} > Collaborated with 3 others to create a sentiment analysis tool for amazon reviews </div>
        <div className={style.projectExplanation} > The tool analyzed product reviews to detect whether the reviewer felt positively or negatively about the product </div>
        <div className={style.projectExplanation}> The tool is horizontally and vertically scalable, and it could potentially handle terabytes of information at once </div>
    </>
}

export const twitchVidsData:ProjectData={
    title:"TwitchVids",
    company:"School Project",
    company_data:null,
    start:"2019-01-01",
    end:"2019-03-01",
    component:TwitchVidsComponent,
    tags:["PHP","Laravel","HTML","CSS", "JavaScript","SQL","PostgreSQL","GitHub","Git"],
    showTags:true
}


export function TwitchVidsComponent() {
    return <>
        <div className={style.projectExplanation} >
            Co-created website which is YouTube but for Twitch clips. Users can see the latest highlights from their favorite streamers by subscribing to them. This was implemented using the Laravel Framework
        </div>
        <div className={style.projectExplanation}>
            Implemented the majority of the server code, including the Laravel models, controllers, and the Twitch API integration
        </div>
        <div className={style.iconRow}><GitHubIcon href="https://github.com/k-brereton/Seng401FinalProject"/> </div>
    </>
}

export const carVisualizerData:ProjectData={
    title:"Car Visualizer",
    company:"School Project",
    company_data:null,
    start:"2019-01-01",
    end:"2019-03-01",
    component:CarVisualizerComponent,
    tags:["PHP","Laravel","HTML","CSS", "JavaScript","SQL","PostgreSQL"],
    showTags:true
}

export function CarVisualizerComponent() {
    return <>
        <div className={style.projectExplanation} >Collaborated with 4 others to create a website for car customization. The website allows users to choose what cars they want to buy, and select colors, etc</div>
        <div className={style.projectExplanation}>
            Implemented the majority of the server code, including the Laravel models and controllers
        </div>
        <div className={style.iconRow}><GitHubIcon href="https://github.com/k-brereton/Seng471Prototype"/> </div>
    </>

}

export const parkingManagementData:ProjectData={
    title:"Parking Data Management System",
    company:"Personal Project",
    company_data:null,
    start:"2018-04-01",
    end:"2018-08-01",
    component:ParkingDataManagementSystemComponent,
    tags:["Java","Android","MySQL","SQL","BitBucket"],
    showTags:true
}

export function ParkingDataManagementSystemComponent() {
    return <>
        <div className={style.projectExplanation} >Collaborated with 3 people to create a highly modular Java Swing application for collecting and organizing data from parking security companies. His efforts resulted in an expandable and easy to use software core to base further projects off of</div>
        <div className={style.projectExplanation}>Designed a Self-Checking Database core which automatically detects data Integrity flaws, creating an easy to use and intuitive database communication</div>
        <div className={style.projectExplanation}>Expanded his knowledge by porting the system over to android</div>
    </>
}

export const bookOrderingSystemData:ProjectData={
    title:"Book Ordering System",
    company:"School Project",
    company_data:null,
    start:"2018-09-01",
    end:"2018-12-01",
    component:BookOrderingSystemComponent,
    tags:["Java","MySQL","SQL","BitBucket"],
    showTags:true
}
export function BookOrderingSystemComponent() {
    return <div className={style.projectExplanation} >
        <div className={style.projectExplanation} >Re-used the framework from the Parking Data Management system to implement a Book Ordering System </div>
    </div>
}

export const desireToLoveData:ProjectData={
    title:"Desire2Love (D2L)",
    company:"School Project",
    company_data:null,
    start:"2018-01-01",
    end:"2018-04-01",
    component:DesireToLoveComponent,
    tags:["Java","MySQL","SQL","BitBucket"],
    showTags:true
}

export function DesireToLoveComponent() {
    return <>
        <div className={style.projectExplanation}>
            Co-created a love themed d2l site. Students could view content for their courses, submit assignments, and participate in online message boards with other other students.
        </div>
        <div className={style.projectExplanation} >
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
    start:"2020-09-01",
    end:"2020-12-01",
    component:ReactMisc,
    tags:["JavaScript","TypeScript","React.js", "Node.js", "CSS"],
    showTags:false
}

export function ReactMisc() {
    return <div className={style.projectExplanation} >
        Implemented various other smaller websites using React.js, Javascript and Typescript. The most fun example is the game
        <a href="https://k-brereton.github.io/mine-sweeper/build/"> Minesweeper</a>
    </div>
}

export const cppMiscData:ProjectData={
    title:"Additional C++ Experience",
    company:"School Projects",
    company_data:null,
    start:"2017-09-01",
    end:"2021-04-01",
    component:CppMiscComponent,
    tags:["C++","C"],
    showTags:false
}
export function CppMiscComponent() {
    return <>
        <div className={style.projectExplanation} > Implemented various smaller C and C++ projects, including:</div>
        <ul>
            <li>An HTTP proxy server</li>
            <li>A small compression engine</li>
            <li>Various embedded systems, such as a remote for a remote controlled car </li>
            <li>Many different algorithm implementations and smaller assignments</li>
        </ul>
        <div className={style.projectExplanation} >
            This work has given Kevin excellent understanding of advanced C++ concepts such as templates, and a strong understanding of systems/embedded programming
        </div>
    </>
}

export const pandasMiscData:ProjectData={
    title:"Additional Experience",
    company:"School Projects",
    company_data:null,
    start:"2020-09-01",
    end:"2021-04-01",
    component:PandasMiscComponent,
    tags:["NumPy","Pandas.py"],
    showTags:false
}
export function PandasMiscComponent(){
    return <div className={style.projectExplanation} >  Worked on various smaller assignments using NumPy and Pandas.py </div>
}

export const javaMiscData:ProjectData={
    title:"Additional Java Experience",
    company:"School Projects",
    company_data:null,
    start:"2016-09-01",
    end:"2018-12-01",
    component:JavaMiscComponent,
    tags:["Java"],
    showTags:false
}
export function JavaMiscComponent() {
    return <>
        <div className={style.projectExplanation} >Used Java for many smaller assignments. This work has given Kevin a strong understanding of advanced techniques like Generics and lambdas </div>
        <div className={style.projectExplanation}>
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
]