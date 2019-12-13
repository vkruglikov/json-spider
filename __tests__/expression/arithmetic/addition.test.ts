import expressionRegistry from "../../../src/registry/expressionRegistry";

import {AdditionExpression} from "../../../src/expression/arithmetic/addition";
import {CONSTANT, ConstantExpression} from "../../../src/expression/constant";

expressionRegistry.register(CONSTANT, ConstantExpression);

it("Addition: createFromJsonExpression", async () => {
    const expression = AdditionExpression.createFromJsonExpression({
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

    expect(await expression.calculate()).toEqual(10);
});
