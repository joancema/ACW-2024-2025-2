import { environment } from "../../environments/environment.development";
import { sleep } from "../helpers/sleep";
import { ICharacter } from "../interfaces/ICharacter";

const URL = environment.url;

export const getCharacter = async (id: string): Promise<ICharacter> => {
  console.log({ URL });
  await sleep(1500);

  try {
    const resp = await fetch(`${URL}/characters/${id}`);
    if (!resp.ok) throw "Can't load character";
    const character: ICharacter = await resp.json();
    console.log({ character });
    return character;
  }
  catch (error) {
    throw "Can't load character";
  }
}

