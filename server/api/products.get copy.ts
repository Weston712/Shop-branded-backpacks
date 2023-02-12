export default defineEventHandler((event) => { 
    return $fetch(`https://learning-trout-52.hasura.app/api/rest/products`)
  });