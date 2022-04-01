import gql from 'graphql-tag';

export const MISSION_INFO_QUERY = gql`
query MissionItems {
    missions{
      mission_id
      mission_name
      manufacturers
      description
      wikipedia
      website
      twitter   
    }
}
`;