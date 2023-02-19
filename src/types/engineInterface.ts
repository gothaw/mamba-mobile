export interface EngineInterface {
  events?: object[],
  dispatchEvent?: (object) => void,
  props?: {
    entities?: object,
    running?: boolean,
    style?: object,
    systems?: () => object,
  },
  refs?: object,
  start?: () => void,
  state?: object
  stop?: () => void,
}