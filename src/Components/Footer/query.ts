import gql from 'graphql-tag';

export const FOOTER_INFO_QUERY = gql`
query FooterInfo {
    info{
        headquarters{
            address
            city
            state
        }
    }
}
`;