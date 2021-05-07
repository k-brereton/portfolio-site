import Link from "next/link"
import Head from 'next/head'
import Layout from "../components/layout";


export default function SkillsPage() {
    return <Layout home={false}>
        <Head>
            <title>Kevin Brereton's Portfolio | Skills</title>
        </Head>
        <h1>Skills</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
    </Layout>
}