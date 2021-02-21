import { EXT_DEP_STR } from '../utils/constants.mjs';

export function externalDep() {
  return EXT_DEP_STR;
}

export class ExternalClass {
  externalDep() {
    return EXT_DEP_STR;
  }
}

export const modB = {
  externalDep,
};
