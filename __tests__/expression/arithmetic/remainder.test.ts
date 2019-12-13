import expressionRegistry from "../../../src/registry/expressionRegistry";

import {RemainderExpression} from "../../../src/expression/arithmetic/remainder";
import {CONSTANT, ConstantExpression} from "../../../src/expression/constant";

expressionRegistry.register(CONSTANT, ConstantExpression);

it("Remainder: createFromJsonExpression", async () => {
    const expression = RemainderExpression.createFromJsonExpression({
        type: "EXP_REMAINDER",
        left: {
            type: "CONSTANT",
            value: 5,
            valueType: "NUMBER",
        },
        right: {
            type: "CONSTANT",
            value: 4,
            valueType: "NUMBER",
        },
    });

    expect(await expression.calculate()).toEqual(1);
});
