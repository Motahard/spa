export const dogsResolver = async () => {
  const data = await fetch(
    'https://api.api-ninjas.com/v1/dogs?name=retriever',
    {
      headers: {
        'X-Api-Key': 'DdOiEDBgIr9QMrW82bjyWQ==mTkQcHRvr6KZirMC',
      },
    }
  );
  const dogs = await data.json();
  return dogs;
};
