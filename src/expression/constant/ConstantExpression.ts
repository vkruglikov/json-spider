import Expression, {JsonExpression} from "../Expression";
import {ConstantExpressionValueType} from "./valueTypes";

interface ConstantJsonExpression extends JsonExpression {
    value: string;
    valueType: ConstantExpressionValueType;
}

class ConstantExpression extends Expression {
    public static createFromJsonExpression(jsonExpression: any) {
        return new this({
            type: jsonExpression.type,
            value: jsonExpression.value,
            valueType: jsonExpression.valueType,
        });
    }

    private readonly value: any;

    constructor({value}: ConstantJsonExpression) {
        super();
        this.value = value;
    }

    public async calculate() {
        return this.value;
    }
}

export default ConstantExpression;
