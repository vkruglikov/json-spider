import expressionRegistry from "../registry/expressionRegistry";
import calculateExpression from "./calculateExpression";
import createExpression from "./createExpression";

import {AdditionExpression, EXP_ADDITION} from "./arithmetic/addition";
import {DivisionExpression, EXP_DIVISION} from "./arithmetic/division";
import {EXP_MULTIPLICATION, MultiplicationExpression} from "./arithmetic/multiplication";
import {EXP_SUBTRACTION, SubtractionExpression} from "./arithmetic/subtraction";
import {ArrayExpression, EXP_ARRAY} from "./array";
import {CONSTANT, ConstantExpression} from "./constant";
import {EXP_OBJECT, ObjectExpression} from "./object";

expressionRegistry.register(EXP_ADDITION, AdditionExpression);
expressionRegistry.register(EXP_SUBTRACTION, SubtractionExpression);
expressionRegistry.register(EXP_MULTIPLICATION, MultiplicationExpression);
expressionRegistry.register(EXP_DIVISION, DivisionExpression);
expressionRegistry.register(CONSTANT, ConstantExpression);
expressionRegistry.register(EXP_ARRAY, ArrayExpression);
expressionRegistry.register(EXP_OBJECT, ObjectExpression);

export {
    createExpression,
    calculateExpression,
};
