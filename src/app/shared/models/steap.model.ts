import { Block } from './block.interface';

export class Step {
  public block: Block;

  constructor(
    public id: string,
    public label: string
  ) {
  }
}

export class WizardSpec {
  steps: Step[];
}
