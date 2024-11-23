import { environment } from "../../environments/environment.development";
import { sleep } from "../helpers/sleep";
import { ICharacters } from "../interfaces/ICharacters";

const URL = environment.url;

export const getCharacters = async (): Promise<ICharacters> => {
  console.log({ URL });
  await sleep(1500);

  try {

    const resp = await fetch(`${URL}/characters`);
    if (!resp.ok) throw "Can't load characters";
    const characters: ICharacters = await resp.json();
    console.log({ characters });
    return characters;
  }
  catch (error) {
    throw "Can't load characters";
  }
}

