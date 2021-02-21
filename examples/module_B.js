import { EXT_DEP_STR } from '../utils/constants.js';

export function externalDep() {
  return EXT_DEP_STR;
}

export class ExternalClass {
  externalDep() {
    return EXT_DEP_STR;
  }
}

export const modBMethods = {
  externalDep,
};

export default modBMethods;
