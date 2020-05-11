/**
 * Builder class.
 */
export abstract class Builder<T, P = Partial<T>> {
  /**
   * Data.
   */
  protected data: P

  /**
   * Builder constructor.
   */
  constructor() {
    this.data = this.buildDefault()
  }

  /**
   * Build default data.
   */
  protected buildDefault(): P {
    return {} as P
  }

  /**
   * Build.
   */
  abstract build(): T
}
