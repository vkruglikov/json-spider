import expressionRegistry from "../../../src/registry/expressionRegistry";

import {ExponentiationExpression} from "../../../src/expression/arithmetic/exponentiation";
import {CONSTANT, ConstantExpression} from "../../../src/expression/constant";

expressionRegistry.register(CONSTANT, ConstantExpression);

it("Exponentiation: createFromJsonExpression", async () => {
    const expression = ExponentiationExpression.createFromJsonExpression({
        type: "EXP_ADDITION",
        left: {
            type: "CONSTANT",
            value: 5,
            valueType: "NUMBER",
        },
        right: {
            type: "CONSTANT",
            value: 5,
            valueType: "NUMBER",
        },
    });

    expect(await expression.calculate()).toEqual(3125);
});
