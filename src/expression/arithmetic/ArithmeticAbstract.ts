import createExpression from "../createExpression";
import Expression, {JsonExpression} from "../Expression";

interface ArithmeticJsonExpression extends JsonExpression {
    left: Expression;
    right: Expression;
}

abstract class ArithmeticAbstract extends Expression {
    public static createFromJsonExpression(jsonExpression: any) {
        // @ts-ignore
        return new this({
            type: jsonExpression.type,
            left: createExpression(jsonExpression.left),
            right: createExpression(jsonExpression.right),
        });
    }

    protected left: Expression;
    protected right: Expression;

    constructor({left, right}: ArithmeticJsonExpression) {
        super();
        this.left = left;
        this.right = right;
    }

    public async calculateOperands() {
        return Promise.all([
            this.left.calculate(),
            this.right.calculate(),
        ]);
    }
}

export default ArithmeticAbstract;
