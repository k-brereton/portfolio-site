import Head from 'next/head'
import {SkillsBox} from "../components/CommonComponents";
import {ProjectTag} from "../components/ProjectComponents";
// @ts-ignore
import style from "./skills.module.scss"

const MAIN_SKILLS:ProjectTag[][]=[
    ["Python","NumPy","Pandas.py","Java","C++"],
    ["TypeScript","React.js","CSS", "JavaScript"],
    ["SQL","MySQL","REST API","Git"]
];
const ADDITIONAL_SKILLS:ProjectTag[][]=[
    ["PHP","Laravel","Node.js","Django","Django Rest Framework"],
    ["Apache Spark","Machine Learning","Natural Language Processing","Next.js","SASS"],
    ["Unit Testing","PostgreSQL","MongoDB", "C","Android"]
];


export default function SkillsPage() {
    return <>
        <Head>
            <title>Kevin Brereton's Portfolio | Skills</title>
        </Head>
        <h1>Skills</h1>
        <div className={style.mainArea}>
                <SkillsBox title="Main Skills" skills={MAIN_SKILLS}  className={style.firstSkills}/>
                <SkillsBox title="Additional Skills" skills={ADDITIONAL_SKILLS} className={style.firstSkills}/>
        </div>
    </>
}