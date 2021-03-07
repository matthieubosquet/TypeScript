import type { ITestCase, ITestRequirement } from "../type";

export const filterRequirements = (requirements: ITestRequirement[], filter: string): ITestCase[] => {
  return requirements
    .map(x => x.cases)
    .reduce((accumulator: ITestCase[], value) => { return [ ...accumulator, ...value ]})
    .filter(test => Array.isArray(test.seeAlso) && test.seeAlso.some(seeAlso => seeAlso === filter));
}

export const filterCases = (testCases: ITestCase[], filter: string): ITestCase[] => {
  return testCases.filter(test => Array.isArray(test.seeAlso) && test.seeAlso.some(seeAlso => seeAlso === filter));
}
