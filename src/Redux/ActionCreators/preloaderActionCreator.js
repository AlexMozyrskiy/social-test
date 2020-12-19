import { IS_PRELOADER_ACTIVE } from "./../ActionTypes/preloaderActionType";

export const preloaderActive = (isActive) => ({ type: IS_PRELOADER_ACTIVE, isActive});