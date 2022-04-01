import React from "react";
import { Table, Image } from "react-bootstrap";
import NO_IMAGE from "../Images/no_image_available.jpg";

interface Props {
  data: {
    ship_id: string;
    ship_name: string;
    ship_model: string | null;
    ship_type: string;
    roles: string[];
    active: boolean;
    year_built: number;
    successful_landings: number | null;
    attempted_landings: number | null;
    image: string | null;
  };
}

const ShipItemDetails: React.FC<Props> = ({ data }) => {
  return (
    <div
      style={{ marginTop: "20px", marginBottom: "20px", padding: "10px 10px" }}
      className="container border"
      title="shipItemDetails"
    >
      <h1 className="text-decoration-underline">{data?.ship_name}</h1>
      <Image
        style={{ height: "500px" }}
        className="container-fluid"
        data-testid="imgs"
        src={data?.image ? data?.image.toString() : NO_IMAGE}
        onError={(e: React.ChangeEvent<any>) => {
          e.target.onerror = null;
          e.target.src = NO_IMAGE;
          e.target.className = "errorImg";
        }}
        rounded
      />
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
            <td>SHIP ID</td>
            <td>{data?.ship_id ? data?.ship_id : "NA"}</td>
          </tr>
          <tr>
            <td>SHIP Model</td>
            <td>{data?.ship_model ? data?.ship_model : "NA"}</td>
          </tr>
          <tr>
            <td>SHIP TYPE</td>
            <td>{data?.ship_type ? data?.ship_type : "NA"}</td>
          </tr>
          <tr>
            <td>ACTIVE</td>
            <td>{data?.active ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Roles</td>
            <td>{
              data?.roles?.map((role,i) => {
                return <li style={{ listStyleType: "none" }} key={i}>{role},</li>
              })
              }</td>
          </tr>
          <tr>
            <td>YEAR BUILT</td>
            <td>
              {data?.year_built ? data?.year_built : "NA"}
            </td>
          </tr>
          <tr>
            <td>ATTEMPTED LANDINGS</td>
            <td>{data?.attempted_landings ? data?.attempted_landings : "NA"}</td>
          </tr>
          <tr>
            <td>SUCCESSFUL LANDINGS</td>
            <td>{data?.successful_landings ? data?.successful_landings : "NA"}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ShipItemDetails;
