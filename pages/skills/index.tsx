import Head from 'next/head'
import {InitialPageAnimations, SkillsBox} from "../../components/CommonComponents";
import {ProjectTag} from "../../components/ExperienceComponents";
// @ts-ignore
import style from "./index.module.scss"


const MAIN_SKILLS:ReadonlyArray<ProjectTag>=[
    "Python",   "SQL",      "React.js",
    "NumPy",    "MySQL",    "TypeScript",
    "Pandas.py","REST API", "CSS",
    "Java",     "Git",      "JavaScript",
    "C++",      "GitHub"
]

const ADDITIONAL_SKILLS:ReadonlyArray<ProjectTag>=[
    "PHP",                  "Unit Testing", "Apache Spark",
    "Laravel",              "PostgreSQL",   "Machine Learning",
    "Node.js",              "MongoDB",      "Natural Language Processing",
    "Django",               "C",            "Next.js",
    "Django Rest Framework","Android",      "SASS",
];

export default function SkillsPage() {
    return <InitialPageAnimations>
        <Head>
            <title>Kevin Brereton's Portfolio | Skills</title>
        </Head>
        <h1 className="display-1 mainTitle">Skills</h1>
        <div className={style.skillsBox1}> <SkillsBox title="Main Skills" skills={MAIN_SKILLS}/></div>
        <div className={style.skillsBox2}> <SkillsBox title="Additional Skills" skills={ADDITIONAL_SKILLS} /> </div>
    </InitialPageAnimations>
}