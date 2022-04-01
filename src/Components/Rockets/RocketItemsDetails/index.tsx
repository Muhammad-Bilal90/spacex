import { useRocketItemsQuery } from '../../../generated/graphql';
import { useParams } from 'react-router-dom';
import RocketItemDetails from './RocketItemDetails';

const RocketItemDetailsContainer = () => {
const { id } = useParams();

  const { data, loading, error } = useRocketItemsQuery();

  const collection = localStorage.getItem('Rockets');

  if (collection !== null && collection !== undefined) {
    let jsonData = JSON.parse(collection);
    // console.log("JSONDATA: ", jsonData);

    const currentMission = jsonData.rockets.find((rocket: { rocket_id: any; }) => rocket.rocket_id === id);

    return <RocketItemDetails data={currentMission} />
  }

  if(loading){
    return <div>Loading...</div>
  }

  if(error || !data){
    return <div>Error</div>
  }else{
    localStorage.setItem('Missions', JSON.stringify(data));

    const currentMission:any = data?.rockets?.find(rocket => rocket?.rocket_id === id);
    console.log('CURRENTMISSION: ', currentMission);
    
    return <RocketItemDetails data={currentMission} />
  }
}

export default RocketItemDetailsContainer;