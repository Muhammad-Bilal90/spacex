import { useState, useEffect } from "react";
import { useRocketItemsQuery } from '../../../generated/graphql';
import RocketItems from "./RocketItems";

const RocketItemsContainer = () => {
    const { data, loading, error } = useRocketItemsQuery();
    const [updateData, setUpdateData] = useState(false);

    useEffect(() => {
        console.log(data);

        if(data !== null && data !== undefined){
            localStorage.setItem("Rockets", JSON.stringify(data));
            setUpdateData(true);
        }
    },[data]);

    let collection = localStorage.getItem("Rockets");

    if(collection !== null && collection !== undefined){
        let jsonData = JSON.parse(collection);

        if(updateData === true){
            return <RocketItems data={data!} />
        }

        return <RocketItems data={jsonData} />
    }

    if(loading){
        return <div>Loading...</div>
    }
    if(error || !data){
        return<div>Error</div>
    }

    return <RocketItems data={data} />
}

export default RocketItemsContainer;