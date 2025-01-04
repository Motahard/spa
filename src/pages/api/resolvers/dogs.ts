import { envVariables } from '@/constants/environment';

const searchDog = async (name: string) => {
  try {
    const data = await fetch(`${envVariables.DOGS_API_URI}/dogs?name=${name}`, {
      headers: {
        'X-Api-Key': envVariables.DOGS_API || '',
      },
    });
    const response = await data.json();

    return response;
  } catch (error) {
    throw new Error('Error while trying to find dog');
  }
};

export default searchDog;
