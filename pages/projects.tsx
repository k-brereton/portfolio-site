import Link from "next/link"
import Head from 'next/head'
import Layout from "../components/layout";

export default function ProjectPage() {
    return <Layout home={false}>
        <Head>
            <title>Kevin Brereton's Portfolio | Projects</title>
        </Head>
        <h1>Projects</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
    </Layout>
}