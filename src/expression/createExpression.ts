import expressionRegistry from "../registry/expressionRegistry";
import {JsonExpression} from "./Expression";

export default function createExpression(jsonExpression: JsonExpression) {
    const Expression = expressionRegistry.lookup(jsonExpression.type);

    return Expression.createFromJsonExpression(jsonExpression);
}
