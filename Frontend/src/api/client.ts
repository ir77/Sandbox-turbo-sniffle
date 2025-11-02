import { SampleControllerApi } from "./apis";
import { Configuration } from "./runtime";

// Share a single configured instance so components do not repeat boilerplate setup.
const configuration = new Configuration({
  basePath: import.meta.env.VITE_API_BASE_PATH ?? "",
});

export const sampleControllerApi = new SampleControllerApi(configuration);
