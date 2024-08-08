import request, { gql } from "graphql-request";

const hygraphUrl = process.env.NEXT_PUBLIC_HYGRAPH_URL ||'';

export const getCarList = async () => {
  const query = gql`
    query carLists {
    carLists {
        id
        name
        pirce
        carBrand
        carAvg
        image {
        fileName
        }
  }
}
  `;
  
  const result = await request(hygraphUrl,query);
  return result;
};
