import axios, { AxiosInstance } from "axios";

import { Engine } from "./index";

let client: AxiosInstance | undefined;

const engine: Engine = {
  id: "jenkins",
  init: ({ origin }: { origin: string }) => {
    client = axios.create({ baseURL: origin });
  },
  search: async q => {
    if (!client) {
      throw Error("Client not initialized");
    }

    const data: {
      jobs: { name: string; url: string }[];
    } = (await client.get("/api/json")).data;
    return data.jobs
      .filter(j => j.name.includes(q))
      .map(j => ({
        title: j.name,
        url: j.url,
      }));
  },
};

export default engine;
