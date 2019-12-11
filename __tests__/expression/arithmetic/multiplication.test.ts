import expressionRegistry from "../../../src/registry/expressionRegistry";

import {MultiplicationExpression} from "../../../src/expression/arithmetic/multiplication";
import {CONSTANT, ConstantExpression} from "../../../src/expression/constant";

expressionRegistry.register(CONSTANT, ConstantExpression)

it('Multiplication: createFromJsonExpression', async () => {
    const expression = MultiplicationExpression.createFromJsonExpression({
        type: 'EXP_MULTIPLICATION',
        left: {
            type: 'CONSTANT',
            value: 5,
            valueType: 'NUMBER'
        },
        right: {
            type: 'CONSTANT',
            value: 5,
            valueType: 'NUMBER'
        }
    });

    expect(await expression.calculate()).toEqual(25);
});