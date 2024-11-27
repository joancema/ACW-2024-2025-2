import { environment } from "../../environments/environment.development";
import { sleep } from "../helpers/sleep";
import { ICharacters } from "../interfaces/ICharacters";

const URL = environment.url;

export const getCharacters = async (): Promise<ICharacters> => {

  await sleep(2000);

  try {
  const response = await fetch(`${URL}/characters`);
  if (!response.ok) {
    throw new Error("Error fetching characters");
  }
  const data: ICharacters  = await response.json();
  console.log(data);
  return data;
  }
  catch (error) {
    console.error(error);
    throw error;
  }
};
