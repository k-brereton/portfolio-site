import Head from 'next/head'
import {SkillsBox} from "../components/CommonComponents";
import {ProjectTag} from "../components/ProjectComponents";
// @ts-ignore
import style from "./skills.module.scss"


const MAIN_SKILLS:ReadonlyArray<ProjectTag>=[
    "Python",   "React.js",     "SQL",
    "NumPy",    "TypeScript",   "MySQL",
    "Pandas.py","CSS",          "REST API",
    "Java",     "JavaScript",   "Git",
    "C++"
]

const ADDITIONAL_SKILLS:ReadonlyArray<ProjectTag>=[
    "PHP",                  "Apache Spark",                 "Unit Testing",
    "Laravel",              "Machine Learning",             "PostgreSQL",
    "Node.js",              "Natural Language Processing",  "MongoDB",
    "Django",               "Next.js",                      "C",
    "Django Rest Framework","SASS",                         "Android"
];

export default function SkillsPage() {
    return <>
        <Head>
            <title>Kevin Brereton's Portfolio | Skills</title>
        </Head>
        <h1>Skills</h1>
        <div className={style.skillsBox1}> <SkillsBox title="Main Skills" skills={MAIN_SKILLS}/></div>
        <div className={style.skillsBox2}> <SkillsBox title="Additional Skills" skills={ADDITIONAL_SKILLS} /> </div>
    </>
}