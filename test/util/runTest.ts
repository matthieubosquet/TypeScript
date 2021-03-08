import type { ITestCase, ITestRequirement } from "../type";

export const runTest = (requirement: ITestRequirement): void => {
  describe(requirement.label, () => {
    requirement.cases.forEach((testCase: ITestCase) => {
      it(testCase.description, () => {
        expect(testCase.input).toEqual(testCase.output);
      });
    });
  });
};
