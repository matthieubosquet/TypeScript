import { ITest } from '.';

export interface ITestCase extends ITest {
  readonly input: any;
  readonly output: any;
}
