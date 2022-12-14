import Node from '../../builtins/Node';

export interface IRoleMatcher {
  matchesAll(aNode: Node): boolean;
  matchesAny(aNode: Node): boolean;
}