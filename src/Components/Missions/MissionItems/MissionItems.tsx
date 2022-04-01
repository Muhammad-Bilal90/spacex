import { MissionItemsQuery } from '../../../generated/graphql';
import './MissionItems.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

interface Props {
  data: MissionItemsQuery,
}

const MissionItems: React.FC<Props> = ({ data }) => {
  return (

      <div id="mission" className='container border' style={{ marginTop: "15px", marginBottom: "15px", padding: "10px 10px" }}>
        <h1 className="text-center text-decoration-underline">Missions launched by SpaceX</h1>
        <div className='row d-flex justify-content-center'>
          {!!data && data.missions?.map(
            (mission, i) => !!mission && (
              <Card title="missionsCard" key={i} style={{ width: '18rem'}} className='m-2'>
                <Card.Body>
                  <Card.Title>{mission.mission_name}</Card.Title>
                  <Card.Text className='multi-line-truncate'>
                    {mission.description}
                  </Card.Text>
                  <Link to={`/missionItems/${mission?.mission_id}`}>
                    <button className='Buttons'>Read More</button>
                  </Link>
                </Card.Body>
              </Card>
            )
          )}
        </div>
      </div>
  );
}

export default MissionItems;