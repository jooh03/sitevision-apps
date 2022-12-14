import Node from '../../builtins/Node';

import { IRoleMatcher } from '../RoleMatcher';
import { IRoleMatcherBuilder } from '../RoleMatcherBuilder';

export interface IRoleMatcherBuilder {
  addRole(aRole: Node): IRoleMatcherBuilder;
  build(): IRoleMatcher;
  clear(): IRoleMatcherBuilder;
  setUser(aUser: Node): IRoleMatcherBuilder;
}