import { gql } from "@apollo/client";

export const WEATHER_QUERY = gql`
  query GetWeatherById($id: [String!]) {
    getCityById(id: $id, config: { units: metric }) {
      name
      weather {
        temperature {
          actual
        }
        summary {
          title
          description
        }
        wind {
          speed
        }
        clouds {
          all
        }
      }
    }
  }
`;
