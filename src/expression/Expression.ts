export interface JsonExpression {
  type: string;
  [index: string]: any;
}

class Expression {
  public calculate(): any {}
  public createFromJsonExpression(): any {}
}

export default Expression;
