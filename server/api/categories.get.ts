const runtimeConfig = useRuntimeConfig()
export default defineEventHandler((event) => {
  return $fetch(
    `https://learning-trout-52.hasura.app/api/rest/categories`,
    {
      headers: {
        "x-hasura-admin-secret": runtimeConfig.apiSecret,
      },
    }
  ).then((result: any) => {
    return result.tabs_category;
  });
});
