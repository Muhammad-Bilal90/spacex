import React from "react";
import { ShipItemsQuery } from "../../../generated/graphql";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NO_IMAGE from "../Images/no_image_available.jpg";

interface Props {
  data: ShipItemsQuery;
}

const ShipItems: React.FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <div style={{ marginTop: "15px", marginBottom: "15px", padding: "10px 10px" }} className="container border">
      <h1 className="text-center text-decoration-underline">Ships Launched by SpaceX</h1>
      <div>
        {!!data &&
          data?.ships?.map(
            (ship, i) =>
              !!ship && (
                <Card title="shipCard" style={{ margin: "15px  0" }} key={i}>
                  <Card.Img
                    id="displayImg"
                    data-testid="rocket_img"
                    variant="top"
                    onError={(e: React.ChangeEvent<any>) => {
                      e.target.onerror = null;
                      e.target.src = NO_IMAGE;
                    }}
                    src={ship?.image ? ship?.image?.toString() : NO_IMAGE}
                    style={{ height: "500px" }}
                  />
                  <Card.Body>
                    <Card.Title>{ship?.ship_name}</Card.Title>
                    <Card.Text><b>SHIP TYPE: </b>{ship?.ship_type ? ship?.ship_type : "NA"}</Card.Text>
                    <Card.Text><b>BUILT YEAR: </b>{ship?.year_built ? ship?.year_built : "NA"}</Card.Text>
                    <Link to={`/shipItems/${ship?.ship_id}`}>
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

export default ShipItems;
