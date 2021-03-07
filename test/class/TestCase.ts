import type { ITestCase } from '../type';

export class TestCase implements ITestCase {
  public readonly label: string;
  public readonly description: string;
  public readonly seeAlso: string[];
  public readonly input: any;
  public readonly output: any;

  constructor(args: Partial<ITestCase>) {
    const {
      label = '',
      description = '',
      seeAlso = [],
      input = true,
      output = true
    } = args;
    this.label = label;
    this.description = description;
    this.seeAlso = seeAlso;
    this.input = input;
    this.output = output;
  }
}
