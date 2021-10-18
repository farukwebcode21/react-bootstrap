import React from 'react'
import {Card, CardImg, Col} from 'react-bootstrap';

const News = (props) => {
    console.log(props);
    const {content, title, urlToImage, description} = props.news;
    return (
        <Col>
            <Card>
              <Card.Img variant="top" src={urlToImage}/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    )
}

export default News
