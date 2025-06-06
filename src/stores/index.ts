import { defineStore } from 'pinia'
import useLoginStore from './service/loginStore'
import useTempStore from './service/tempStore'
import useDarkModeStore from './service/darkStore'
import useQuetionnaireStore from './service/questionnaireStore'
import { useImageStore } from './service/imageStore'
import useOptionStore from './service/optionStore'

export const useMainStore = defineStore(
  'main',
  () => {
    return {
      useLoginStore,
      useTempStore,
      useDarkModeStore,
      useQuetionnaireStore,
      useImageStore,
      useOptionStore
    }
  },
  { persist: true }
)
