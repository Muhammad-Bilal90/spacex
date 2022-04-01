import { useMissionItemsQuery } from '../../../generated/graphql';
import { useParams } from 'react-router-dom';
import MissionItemDetails from './MissionItemDetails';

const MissionItemDetailsContainer = () => {
const { id } = useParams();

  const { data, loading, error } = useMissionItemsQuery();

  const collection = localStorage.getItem('Missions');

  if (collection !== null && collection !== undefined) {
    let jsonData = JSON.parse(collection);
    // console.log("JSONDATA: ", jsonData);

    const currentMission = jsonData.missions.find((mission: { mission_id: any; }) => mission.mission_id === id);

    return <MissionItemDetails data={currentMission} />
  }

  if(loading){
    return <div>Loading...</div>
  }

  if(error || !data){
    return <div>Error</div>
  }else{
    localStorage.setItem('Missions', JSON.stringify(data));

    const currentMission:any = data?.missions?.find(mission => mission?.mission_id === id);
    console.log('CURRENTMISSION: ', currentMission);
    
    return <MissionItemDetails data={currentMission} />
  }
}

export default MissionItemDetailsContainer;