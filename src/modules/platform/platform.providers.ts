import { Platform } from "./platform.model"

export const platformProviders = [
  {
    provide: "PLATFORMS_REPOSITORY",
    useValue: Platform,
  },
]
