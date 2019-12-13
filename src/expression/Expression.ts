export interface JsonExpression {
  type: string;
  [index: string]: any;
}

class Expression {
  // tslint:disable-next-line:no-empty
  public calculate(): any {}
  // tslint:disable-next-line:no-empty
  public createFromJsonExpression(): any {}
}
export default Expression;
