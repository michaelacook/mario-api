import { Platform } from "./platform.model"
import { PLATFORM_REPOSITORY } from "src/core/constants"

export const platformProviders = [
  {
    provide: PLATFORM_REPOSITORY,
    useValue: Platform,
  },
]
