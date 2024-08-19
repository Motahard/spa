const searchDog = async (name: string) => {
  try {
    const data = await fetch(
      `https://api.api-ninjas.com/v1/dogs?name=${name}`,
      {
        headers: {
          'X-Api-Key': process.env.DOGS_API || '',
        },
      }
    );
    const response = await data.json();

    return response;
  } catch (error) {
    throw new Error('Error while trying to find dog');
  }
};

export default searchDog;
