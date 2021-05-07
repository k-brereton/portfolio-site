import Head from 'next/head'
import Layout  from '../components/layout'
import {Col, Container, Image, Row} from "react-bootstrap";
import {ContactMediaBar} from "../components/CommonComponents";


function HomeLinks(){
    return <div>links</div>
}

function HomeContactInfo(){
    return <Container>
        <Row> <Image src={"/images/logo.png"} height={175} width={175}/> </Row>
        <Row><ContactMediaBar /></Row>
    </Container>
}

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>Kevin Brereton's Portfolio</title>
        </Head>
        <main>
            <Row>
                <Col>
                    <HomeLinks />
                </Col>
                <Col>
                    <HomeContactInfo />
                </Col>
            </Row>
        </main>
      </Layout>
  )
}
