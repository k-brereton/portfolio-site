import { motion } from 'framer-motion';
import Head from 'next/head'
import {SkillsBox} from "../../components/CommonComponents";
import {ProjectTag} from "../../components/ExperienceComponents";
// @ts-ignore
import style from "./index.module.scss"
import {createDisappearingVariant} from "../../components/animations";


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
    return <>
        <Head>
            <title>Kevin Brereton's Portfolio | Skills</title>
        </Head>
        <motion.h1 className="display-2 mainTitle" variants={createDisappearingVariant(0.5,undefined,{delay:0.3})}>Skills</motion.h1>
        <div className={style.skillsBox1}> <SkillsBox title="Main Skills" skills={MAIN_SKILLS} animatable={true}/></div>
        <div className={style.skillsBox2}> <SkillsBox title="Additional Skills" skills={ADDITIONAL_SKILLS} animatable={true}/> </div>
    </>
}