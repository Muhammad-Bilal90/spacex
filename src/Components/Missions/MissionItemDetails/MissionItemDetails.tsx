import React from "react";
import { Table, Image } from "react-bootstrap";
import NO_IMAGE from "../Images/no_image_available.jpg";

interface Props {
  data: {
    mission_id: string;
    mission_name: string;
    manufacturers: string[];
    description: string;
    wikipedia: string | null;
    website: string | null;
    twitter: string | null;
  };
}

const ShipItemDetails: React.FC<Props> = ({ data }) => {
  return (
    <div
      style={{ marginTop: "20px", marginBottom: "20px", padding: "10px 10px" }}
      className="container border"
      title="shipItemDetails"
    >
      <h1 className="text-decoration-underline">{data?.mission_name}</h1>
      <p>{data?.description}</p>
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
            <td>MANUFACTURERS</td>
            <td>{data?.manufacturers ? data?.manufacturers : "NA"}</td>
          </tr>
          <tr>
            <td>WEBSITE</td>
            <td>
              <a
                href={data?.website?.toString()}
                target="_blank"
                rel="noopener noreferrer"
              >LINK</a>
            </td>
          </tr>
          <tr>
            <td>WIKIPEDIA</td>
            <td>
              <a
                href={data?.wikipedia?.toString()}
                target="_blank"
                rel="noopener noreferrer"
              >LINK</a>
            </td>
          </tr>
          <tr>
            <td>TWITTER</td>
            <td>
              <a
                href={data?.twitter?.toString()}
                target="_blank"
                rel="noopener noreferrer"
              >LINK</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ShipItemDetails;
