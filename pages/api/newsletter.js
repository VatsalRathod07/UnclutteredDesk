/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = "https://api-ap-south-1.hygraph.com/v2/clfm2rma40rtl01t5ftggari7/master";
const grapcmsToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODAwNzAwMjYsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZm0ycm1hNDBydGwwMXQ1ZnRnZ2FyaTcvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjA4MTA2ZDg0LTY2NDctNDk4NC1iZjI0LWFiOWNkYzNhZDEyOSIsImp0aSI6ImNsZnRhYmQzYzJlaGQwMXVwOHk0ZjRnNW4ifQ.V1d7G0j5VsPKhXsvhbf0P4Algf6YAMZcXOYD4UqFVqyPCIqBsbBvKQUaDhMg31GueJ_nBRsnwPVUYc6mAdankGG7UGfbMeKlXgFY8wSMRBFrJT_LgCx_I7ZN79JZmwIdvRf6brWM20o1ZCmzUwnwYkYG6Uvf0pvOHMRKAgo6DB09s0CkUJ6LXLfXcIpRUvl_0rahc1smB4f3i48UAbzEm9XYpbpLy7H0Pw25OoO5H36Bjb4Trj0vf6miiSfE9opQC5SIEfmipDhpHjHlY53IRUnYi4XyS0kF3wWNGfPbfBg6lHf6L9v4qRabHQgDrKW0uIV757AfnLPuT0GipMfgsMH84DmjCGXrnYu2xp8qiu24Npcf1x1LwsNdX_CzFnSHPUBOp7k3qLXtMu1LAeRGJay9U_mkiPmEcJF-C-hL1TjZHCiAiYP9vY9VS-2oq2n8R6nR7IGO_IMdTdhL3JVpI2ySd9s379hnu6NEJjk-Pp5kbcMSe6wrIzED8oFnSbJ964B_UBZz1Bvt2Pcx3vK0dqzLun35QFnvJz3Q1nbjMTg_AcZs0JVL1LVk6PJ9IZ5d7Ch8Z5VhDUfLMoEgl_vsalmxuebHQOrUth5ikNma4AtNkIVbdu5nP3FXlp2aDOF7yKu8beSWyvfbBAfUUUToFFKNR7lMRWJrFL5ZA42oSQg";

export default async function newsletter(req, res) {
  console.log({ grapcmsToken });
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${grapcmsToken}`,
    },
  })

  const query = gql`
     mutation createNewsletter($email: String!) {
      createNewsletter(data: { email: $email }) {id}
    } 

  `;
  
  try {
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

}
