import Layout from "../components/layout";
import Link from "next/link";
import {PageHead} from "../components/CommonComponents";

export default function  About() {
    return <Layout home={false}>
        <PageHead description={"Kevin Brereton Contact Information"} title={"Kevin Brereton's Portfolio | About"}/>
        <h1>Contact</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
    </Layout>
}