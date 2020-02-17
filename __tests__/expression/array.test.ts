import {ArrayExpression} from "../../src/expression/array";
import {CONSTANT, ConstantExpression} from "../../src/expression/constant";
import expressionRegistry from "../../src/registry/expressionRegistry";

expressionRegistry.register(CONSTANT, ConstantExpression);

it("Array: createFromJsonExpression", async () => {
    const expression = ArrayExpression.createFromJsonExpression({
        type: "ARRAY",
        content: [
            {
                type: "CONSTANT",
                value: 2,
                valueType: "NUMBER",
            },
        ],
    });

    expect(await expression.calculate()).toEqual([2]);
});
