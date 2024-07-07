export const dogsResolver = async (name: string) => {
  const data = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
    headers: {
      'X-Api-Key': 'DdOiEDBgIr9QMrW82bjyWQ==mTkQcHRvr6KZirMC',
    },
  });
  const dogs = await data.json();
  return dogs;
};
