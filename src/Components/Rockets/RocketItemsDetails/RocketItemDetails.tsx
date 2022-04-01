import React from "react";
import { Table, Image } from "react-bootstrap";
import NO_IMAGE from "../Images/no_image_available.jpg";

interface Props {
  data: {
    active: boolean;
    boosters: number;
    company: string;
    cost_per_launch: number;
    country: string;
    description: string;
    engines: {
      number: number;
      type: string;
      version: string;
      __typename: string;
    };
    first_flight: string;
    flickr_images: string[];
    mass: {
      kg: number;
      __typename: string;
    };
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    stages: number;
    success_rate_pct: number;
    __typename: string;
  };
}

const ShipItemDetails: React.FC<Props> = ({ data }) => {
  return (
    <div
      style={{ marginTop: "20px", marginBottom: "20px", padding: "10px 10px" }}
      className="container border"
      title="shipItemDetails"
    >
      <h1 className="text-decoration-underline">{data?.rocket_name}</h1>
      <p>{data?.description}</p>
      {/* <Image
        style={{ height: "500px" }}
        className="container-fluid"
        data-testid="imgs"
        src={data?.flickr_images ? data?.flickr_images[0].toString() : NO_IMAGE}
        onError={(e: React.ChangeEvent<any>) => {
          e.target.onerror = null;
          e.target.src = NO_IMAGE;
          e.target.className = "errorImg";
        }}
        rounded
      /> */}
      {!!data?.flickr_images &&
        Object.entries(data?.flickr_images).map((img, k) => {
          return (
            <Image
              className="container-fluid m-2"
              data-testid="imgs"
              key={k}
              src={img[1] ? img[1] : undefined}
              onError={(e: React.ChangeEvent<any>) => {
                e.target.onerror = null;
                e.target.src = NO_IMAGE;
                e.target.className = "container-fluid";
              }}
              rounded
            />
          );
        })}
      <Table
        style={{ marginTop: "30px" }}
        striped
        bordered
        hover
        variant="dark"
      >
        <thead className="tableHeader">
          <tr>
            <th>Specifications</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {/* { 
!!data && 
Object.entries(data).map((entry,i) => {

 if (entry[0] !== "__typename" && entry[0] !== "ship_name" &&  entry[0] !== "image" && entry[0] !== "ship_id"){


   
    if (entry[1] === null){

      entry[1] = "NA"
    }


    if (typeof entry[1] === "boolean"){

    
    if (entry[1] === true){

      entry[1] = "yes";
    
    }

    if (entry[1] === false){

      entry[1] = "no";
    
    }

    } 


    if (entry[0] === "roles"){

       

          
      return(


        <tr key = {i} >
        <td> {entry[0].replace(/_/gi, " ")} </td>
        <td> 
        {
           !!entry[1] && Object.values(entry[1]).map((role,k) => {
              return (


                <li key = {k}>  {role}   </li>
              )


           })
        }  
        </td>
        </tr>
      

      )

        
 
    }


return (


  <tr key = {i} >
  <td> {entry[0].replace(/_/gi, " ")} </td>
  <td> {entry[1]} </td>
  </tr>

)


}

return (

 null

)

}

) 
  
} */}

          <tr>
            <td>ROCKET ID</td>
            <td>{data?.rocket_id ? data?.rocket_id : "NA"}</td>
          </tr>
          <tr>
            <td>ROCKET TYPE</td>
            <td>{data?.rocket_type ? data?.rocket_type : "NA"}</td>
          </tr>
          <tr>
            <td>ACTIVE</td>
            <td>{data?.active ? "YES" : "NO"}</td>
          </tr>
          <tr>
            <td>MASS</td>
            <td>{data?.mass?.kg ? data?.mass?.kg+"Kg": "NA"}</td>
          </tr>
          <tr>
            <td>ENGINES</td>
            <td>
              {`Number: ${data?.engines.number ? data?.engines.number : "NA"}, TYPE: ${data?.engines?.type ? data?.engines?.type : "NA"}, VERSION: ${data?.engines?.version ? data?.engines?.version : "NA"}`}
            </td>
          </tr>
          <tr>
            <td>COMPANY</td>
            <td>{data?.company ? data?.company : "NA"}</td>
          </tr>
          <tr>
            <td>BOOSTERS</td>
            <td>
              {data?.boosters}
            </td>
          </tr>
          <tr>
            <td>STAGES</td>
            <td>
              {data?.stages ? data?.stages: "NA"}
            </td>
          </tr>
          <tr>
            <td>FIRST FLIGHT</td>
            <td>
              {data?.first_flight ? data?.first_flight : "NA"}
            </td>
          </tr>
          <tr>
            <td>COUNTRY</td>
            <td>
              {data?.country ? data?.country : "NA"}
            </td>
          </tr>
          <tr>
            <td>COST PER LAUNCH</td>
            <td>
              {data?.cost_per_launch ? data?.cost_per_launch : "NA"}
            </td>
          </tr>
          <tr>
            <td>SUCCESS RATE</td>
            <td>
              {data?.success_rate_pct ? data?.success_rate_pct+"%": "NA"}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ShipItemDetails;
