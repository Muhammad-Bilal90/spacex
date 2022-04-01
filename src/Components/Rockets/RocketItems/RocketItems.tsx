import React from "react";
import { RocketItemsQuery } from "../../../generated/graphql";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NO_IMAGE from "../Images/no_image_available.jpg";

interface Props {
  data: RocketItemsQuery;
}

const RocketItems: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ marginTop: "15px", marginBottom: "15px", padding: "10px 10px"}} className="container border">
      <h1 className="text-center text-decoration-underline">Rockets launched by SpaceX</h1>
      <div>
        {!!data &&
          data.rockets?.map(
            (rocket, i) =>
              !!rocket && (
                <Card title="rocketCards" style={{ margin: "15px  0"}} key={i}>
                  <Card.Img
                    id="displayImg"
                    data-testid="rocket_img"
                    variant="top"
                    onError={(e: React.ChangeEvent<any>) => {
                      e.target.onerror = null;
                      e.target.src = NO_IMAGE;
                    }}
                    src={rocket?.flickr_images?.[0] ? rocket.flickr_images?.[0] : NO_IMAGE}

                    style={{ height: "500px"}}
                  />
                  <Card.Body>
                    <Card.Title>{rocket.rocket_name}</Card.Title>
                    <Card.Text>{rocket.description}</Card.Text>
                    <Link to={`/rocketItems/${rocket?.rocket_id}`}>
                      <button className="Buttons">Read More</button>
                    </Link>
                  </Card.Body>
                </Card>
              )
          )}
      </div>
    </div>
  );
};

export default RocketItems;
