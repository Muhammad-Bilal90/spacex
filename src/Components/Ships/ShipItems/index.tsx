import { useState, useEffect } from "react";
import { useShipItemsQuery } from '../../../generated/graphql';
import ShipItems from "./ShipItems";

const ShipItemsContainer = () => {
    const { data, loading, error } = useShipItemsQuery();
    const [updateData, setUpdateData] = useState(false);

    useEffect(() => {
        console.log(data);

        if(data !== null && data !== undefined){
            localStorage.setItem("Ships", JSON.stringify(data));
            setUpdateData(true);
        }
    },[data]);

    let collection = localStorage.getItem("Ships");

    if(collection !== null && collection !== undefined){
        let jsonData = JSON.parse(collection);

        if(updateData === true){
            return <ShipItems data={data!} />
        }

        return <ShipItems data={jsonData} />
    }

    if(loading){
        return <div>Loading...</div>
    }
    if(error || !data){
        return<div>Error</div>
    }

    return <ShipItems data={data} />
}

export default ShipItemsContainer;