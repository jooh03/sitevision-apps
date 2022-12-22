
export function getAlwaysAcceptFilter(): List<Node>;
export function getStringPropertyFilter(aPropertyName: string, aMatchValue: string): any;
export function getRangeNestedIntPropertyFilter(aNodePropertyName: string, aPropertyName: string, aMinValue: number, aMaxValue: number): any;
export function getMinIntPropertyFilter(aPropertyName: string, aMinValue: number): any;
export function getMaxIntPropertyFilter(aPropertyName: string, aMaxValue: number): any;
export function getMinDoublePropertyFilter(aPropertyName: string, aMinValue: number): any;
export function getMaxDoublePropertyFilter(aPropertyName: string, aMaxValue: number): any;
export function getCompoundOrFilterBuilder(): any;
export function getCompoundAndFilterBuilder(): any;

declare namespace nodeFilterUtil {
  export {
    getAlwaysAcceptFilter,
    getStringPropertyFilter,
    getRangeNestedIntPropertyFilter,
    getMinIntPropertyFilter,
    getMaxIntPropertyFilter,
    getMinDoublePropertyFilter,
    getMaxDoublePropertyFilter,
    getCompoundOrFilterBuilder,
    getCompoundAndFilterBuilder
  };
}

export default nodeFilterUtil;
