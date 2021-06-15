import { Platform } from "./models/platform.model"

export const platformProviders = [
  {
    provide: "PLATFORM_REPOSITORY",
    useValue: Platform,
  },
]
