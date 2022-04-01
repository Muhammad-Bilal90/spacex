import gql from 'graphql-tag';

export const SHIPS_QUERY = gql`
query ShipItems {
  ships{
    ship_id
    ship_name
    ship_model
    ship_type
    roles
    active
    year_built
    successful_landings
    attempted_landings
    image
    }
}
`;