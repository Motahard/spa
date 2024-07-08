export const dogsResolver = async (name: string) => {
  try {
    const data = await fetch(
      `https://api.api-ninjas.com/v1/dogs?name=${name}`,
      {
        headers: {
          'X-Api-Key': 'DdOiEDBgIr9QMrW82bjyWQ==mTkQcHRvr6KZirMC',
        },
      }
    );
    const response = await data.json();

    return response;
  } catch (error) {
    throw new Error('Error while trying to find dog');
  }
};
