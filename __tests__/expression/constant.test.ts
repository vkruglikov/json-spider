import {ConstantExpression} from "../../src/expression/constant";

it('Constant: createFromJsonExpression', async () => {
    const expression = ConstantExpression.createFromJsonExpression({
        type: 'CONSTANT',
        value: 'test',
        valueType: 'STRING'
    });

    expect(await expression.calculate()).toEqual('test');
});