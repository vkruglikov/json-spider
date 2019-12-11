import expressionRegistry from "../../../src/registry/expressionRegistry";
import {SubtractionExpression} from "../../../src/expression/arithmetic/subtraction";
import {CONSTANT, ConstantExpression} from "../../../src/expression/constant";

expressionRegistry.register(CONSTANT, ConstantExpression)

it('Subtraction: createFromJsonExpression', async () => {
    const expression = SubtractionExpression.createFromJsonExpression({
        type: 'EXP_SUBTRACTION',
        left: {
            type: 'CONSTANT',
            value: 10,
            valueType: 'NUMBER'
        },
        right: {
            type: 'CONSTANT',
            value: 10,
            valueType: 'NUMBER'
        }
    });

    expect(await expression.calculate()).toEqual(0);
});