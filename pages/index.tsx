import Head from 'next/head'
import {Col, Container, Image, Row} from "react-bootstrap";
import {ContactMediaBar} from "../components/CommonComponents";
// @ts-ignore
import style from "./index.module.css"

function HomeLinks(){

    return <div>links</div>
}

function HomeContactInfo(){
    return <div className={style.centeringDiv}>
        <Row className={style.centeringDiv}> <Image src={"/images/logo.png"} className={style.mainImage} /> </Row>
        <Row className={style.centeringDiv}><ContactMediaBar showAboutLink/></Row>
    </div>
}

export default function Home() {
  return (
      <>
          <Head>
          <title>Kevin Brereton's Portfolio</title>
        </Head>
          <Container>
        <Row>
            <Col>
                <HomeLinks />
            </Col>
            <Col>
                <HomeContactInfo />
            </Col>
        </Row>
          </Container>
      </>
  )
}
