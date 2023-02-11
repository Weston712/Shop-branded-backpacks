export default defineEventHandler((event) => { 
    return $fetch(`https://learning-trout-52.hasura.app/api/rest/products`, { headers: {
        'x-hasura-admin-secret': 'Cu2c3U3DDLhEMYfRDDYmNtVJKQ3Fg0dLO2VU74q7PbEI5Wzl5Xl2SFIsisTr26Q8'
    }}).then((result: any) => result.products)
  });