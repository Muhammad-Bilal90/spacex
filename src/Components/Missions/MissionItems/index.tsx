import { useState, useEffect } from "react";
import { useMissionItemsQuery } from '../../../generated/graphql';
import MissionItems from "./MissionItems";

const MissionItemsContainer = () => {
    const { data, loading, error } = useMissionItemsQuery();
    const [updateData, setUpdateData] = useState(false);

    useEffect(() => {
        console.log(data);

        if(data !== null && data !== undefined){
            localStorage.setItem("Missions", JSON.stringify(data));
            setUpdateData(true);
        }
    },[data]);

    let collection = localStorage.getItem("Missions");

    if(collection !== null && collection !== undefined){
        let jsonData = JSON.parse(collection);

        if(updateData === true){
            return <MissionItems data={data!} />
        }

        return <MissionItems data={jsonData} />
    }

    if(loading){
        return <div>Loading...</div>
    }
    if(error || !data){
        return<div>Error</div>
    }

    return <MissionItems data={data} />
}

export default MissionItemsContainer;