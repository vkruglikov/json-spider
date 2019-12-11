import createExpression from "./createExpression";
import {JsonExpression} from "./Expression";

export default async function calculateExpression(jsonExpression: JsonExpression) {
    const expression = createExpression(jsonExpression);

    return expression.calculate();
}
