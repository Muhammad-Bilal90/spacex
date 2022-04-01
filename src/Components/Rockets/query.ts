import gql from 'graphql-tag';

export const ROCKETS_INFO_QUERY = gql`
query RocketItems {
    rockets {
      rocket_id
      rocket_name
    	rocket_type
    	description
    	active
        mass{
          kg
        }
    	engines{
        number
        type
        version
      }
    	company
    	boosters
    	stages
      first_flight
      country
      cost_per_launch
  		success_rate_pct
    	flickr_images
    }
}
`;