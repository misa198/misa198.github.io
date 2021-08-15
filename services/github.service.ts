import axios from "axios";

import { ghPinRepoUrlApi, username } from "constants/config";
import { PinnedRepository } from "types/PinnedRepository";

export async function getPinnedRepositories(): Promise<PinnedRepository[]> {
  const response = await axios.get(`${ghPinRepoUrlApi}/?username=${username}`);
  return response.data;
}
