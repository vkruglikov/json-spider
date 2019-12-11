import expressionRegistry from "../../../src/registry/expressionRegistry";

import {DivisionExpression} from "../../../src/expression/arithmetic/division";
import {CONSTANT, ConstantExpression} from "../../../src/expression/constant";

expressionRegistry.register(CONSTANT, ConstantExpression)

it('Division: createFromJsonExpression', async () => {
    const expression = DivisionExpression.createFromJsonExpression({
        type: 'EXP_DIVISION',
        left: {
            type: 'CONSTANT',
            value: 100,
            valueType: 'NUMBER'
        },
        right: {
            type: 'CONSTANT',
            value: 10,
            valueType: 'NUMBER'
        }
    });

    expect(await expression.calculate()).toEqual(10);
});