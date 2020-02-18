import {CONSTANT, ConstantExpression} from "../../src/expression/constant";
import {ObjectExpression} from "../../src/expression/object";
import expressionRegistry from "../../src/registry/expressionRegistry";

expressionRegistry.register(CONSTANT, ConstantExpression);

it("Object: createFromJsonExpression", async () => {
    const expression = ObjectExpression.createFromJsonExpression({
        type: "OBJECT",
        content: [
            {
                key: "foo",
                value: {
                    type: "CONSTANT",
                    value: 2,
                    valueType: "NUMBER",
                },
            },
        ],
    });

    expect(await expression.calculate()).toEqual({
        foo: 2,
    });
});
