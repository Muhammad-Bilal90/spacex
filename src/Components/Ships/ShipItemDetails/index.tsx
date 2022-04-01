import { useShipItemsQuery } from '../../../generated/graphql';
import { useParams } from 'react-router-dom';
import ShipItemDetails from './ShipItemDetails';

const ShipItemDetailsContainer = () => {
const { id } = useParams();

  const { data, loading, error } = useShipItemsQuery();

  const collection = localStorage.getItem('Ships');

  if (collection !== null && collection !== undefined) {
    let jsonData = JSON.parse(collection);
    // console.log("JSONDATA: ", jsonData);

    const currentMission = jsonData.ships.find((ship: { ship_id: any; }) => ship.ship_id === id);

    return <ShipItemDetails data={currentMission} />
  }

  if(loading){
    return <div>Loading...</div>
  }

  if(error || !data){
    return <div>Error</div>
  }else{
    localStorage.setItem('Missions', JSON.stringify(data));

    const currentMission:any = data?.ships?.find(ship => ship?.ship_id === id);
    console.log('CURRENTMISSION: ', currentMission);
    
    return <ShipItemDetails data={currentMission} />
  }
}

export default ShipItemDetailsContainer;