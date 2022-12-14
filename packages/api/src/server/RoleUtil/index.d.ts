import { IRoleAssignmentBuilder } from '../RoleAssignmentBuilder';
import { IRoleMatcherBuilder } from '../RoleMatcherBuilder';

export function containsPermission(): boolean;
export function getRoleAssignmentBuilder(aRole: Node, aPermission: any): IRoleAssignmentBuilder;
export function getRoleByName(aRoleName: string): Node;
export function getRoleMatcherBuilder(): IRoleMatcherBuilder;

declare namespace roleUtil {
  export {
    containsPermission,
    getRoleAssignmentBuilder,
    getRoleByName,
    getRoleMatcherBuilder,
  };
}

export default roleUtil;