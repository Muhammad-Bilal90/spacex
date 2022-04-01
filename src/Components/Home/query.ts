import gql from 'graphql-tag';

export const COMPANY_INFO_QUERY = gql`
query CompanyInfo {
    info {
        name
        founded
        founder
        ceo
        coo
        cto_propulsion
        employees
        valuation
        summary
    }
}
`;