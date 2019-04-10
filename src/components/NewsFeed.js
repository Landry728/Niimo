import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardLink,
  Col,
  Row
} from "reactstrap";

export default class NewsFeed extends Component {
  render() {

  return (
    <div>
      {/* *** FIRST CARD *** */}
      <Row style={{ border: '10', justifyContent: 'center', }}>
      <Col sm="1">
      <Card color="dark" dark style = {{ border: '3px white solid'}}>
        <CardImg className="text-light" light
          top
          width="100%"
          src="https://deanoinamerica.files.wordpress.com/2014/01/img_2886-1024x768.jpg?w=1000&h=749"
          alt="Card image cap"
        />
        <CardBody className="text-light" light>
          <CardTitle>Building Permits Approved</CardTitle>
          <CardText>
            The following permits for construction and renovation have been
            granted by the city of Birmingham: Electrical, Plumbing, and HVAC...
          </CardText>
          <CardLink href="#">Learn More</CardLink>
        </CardBody>
      </Card>
      </Col>
      
      {/* *** SECOND CARD *** */}
      
    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="https://www.bankforeclosuressale.com/images/categories/a-commercial-building.jpg"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>We have the lease!</CardTitle>
        <CardText>
          The lease for our building was obtained today by Corporate Realty.
          Renovation will be underway within the following weeks...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>

    {/* *** THIRD CARD *** */}

    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="http://www.bergerlaw.net/photos/abandoned-strip-mall.jpg"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>Building Permits Approved</CardTitle>
        <CardText>
          The following permits for construction and renovation have been
          granted by the city of Birmingham: Electrical, Plumbing, and HVAC...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>
    </Row>
    
    {/* *** FOURTH CARD *** */}
    
    <Row style={{ border: '10', justifyContent: 'center', }}>
    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="https://cdn.vox-cdn.com/thumbor/IUFtEEBDz077fHMNUAtFO7PHrXw=/0x0:1024x502/1200x800/filters:focal(431x170:593x332)/cdn.vox-cdn.com/uploads/chorus_image/image/59928279/40756v.0.jpg"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>We have the lease!</CardTitle>
        <CardText>
        The lease for our building was obtained today by Corporate Realty.
        Renovation will be underway within the following weeks...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>
    
    {/* *** FIFTH CARD *** */}
   
    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="https://tangodigitalsystems.org/wp-content/uploads/2018/02/The-Best-Video-Surveillance-for-Abandoned-Commercial-Properties.jpg"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>Building Permits Approved</CardTitle>
        <CardText>
          The following permits for construction and renovation have been
          granted by the city of Birmingham: Electrical, Plumbing, and HVAC...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>

    {/* *** SIXTH CARD *** */}

    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="https://static1.squarespace.com/static/52d2ebb3e4b06f22d60562c5/52e403a8e4b08ed408a69db5/5761321cd210b8e1f48e1c87/1465987615273/Hargrove_Adam-Jacobs-Landscape-Abandoned-Places.jpg"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>We have the lease!</CardTitle>
        <CardText>
        The lease for our building was obtained today by Corporate Realty.
        Renovation will be underway within the following weeks...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>
    </Row>

    {/* *** SEVENTH CARD *** */}

    <Row style={{ justifyContent: 'center', }}>
    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="https://www.gannett-cdn.com/-mm-/845383ccf561e60bb5823bb6ef9d046248cd5566/c=2-0-834-624/local/-/media/GreenBay/2015/01/13/B9315852496Z.1_20150113194653_000_GEF9LSE3V.1-0.jpg?width=534&height=401&fit=crop"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>Building Permits Approved</CardTitle>
        <CardText>
        The following permits for construction and renovation have been
        granted by the city of Birmingham: Electrical, Plumbing, and HVAC...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>

    {/* *** EIGHTH CARD *** */}

    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="http://sisinsure.com/wp-content/uploads/2016/08/vacant_build.jpg"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>We have the lease!</CardTitle>
        <CardText>
        The lease for our building was obtained today by Corporate Realty.
        Renovation will be underway within the following weeks...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>
    
    {/* *** NINTH CARD *** */}
    
    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="https://jkinmartin.files.wordpress.com/2018/11/img_2876-e1541714239530.jpg?w=519"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>Building Permits Approved</CardTitle>
        <CardText>
        The following permits for construction and renovation have been
        granted by the city of Birmingham: Electrical, Plumbing, and HVAC...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>
    </Row>

    {/* *** TENTH CARD *** */}

    <Row style={{ border: '10', justifyContent: 'center', }}>
    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="https://www.alexcityoutlook.com/wp-content/uploads/2018/06/web-DEMOLITION-GRANT-622x350.jpg"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>We have the lease!</CardTitle>
        <CardText>
        The lease for our building was obtained today by Corporate Realty.
        Renovation will be underway within the following weeks...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>
    
    {/* *** ELEVENTH CARD *** */}
    
    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="https://finance-commerce.com/files/2018/08/Micro-Apartments-590Park5.jpg"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>Building Permits Approved</CardTitle>
        <CardText>
        The following permits for construction and renovation have been
        granted by the city of Birmingham: Electrical, Plumbing, and HVAC...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>

    {/* *** 12TH CARD *** */}

    <Col sm="1">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
      <CardImg className="text-light" light
        top
        width="100%"
        src="https://d3el53au0d7w62.cloudfront.net/wp-content/uploads/2016/12/06/c01_jd_07dec_vacant.jpg"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardTitle>We have the lease!</CardTitle>
        <CardText>
        The lease for our building was obtained today by Corporate Realty.
        Renovation will be underway within the following weeks...
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    </Col>
    </Row>
  </div>
  );
};
}