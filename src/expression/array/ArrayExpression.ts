import createExpression from "../createExpression";
import Expression, {JsonExpression} from "../Expression";

interface ArrayJsonExpression extends JsonExpression {
    content: JsonExpression[];
}

class ArrayExpression extends Expression {
    public static createFromJsonExpression(jsonExpression: ArrayJsonExpression) {
        return new this({
            type: jsonExpression.type,
            content: jsonExpression.content.map((json: JsonExpression) => createExpression(json)),
        });
    }

    private readonly content: JsonExpression[];

    constructor({content}: ArrayJsonExpression) {
        super();
        this.content = content;
    }

    public async calculate() {
        const array = await this.content.reduce(async (memo, expression) => (await memo).concat(
            await expression.calculate(),
        ), Promise.resolve([]));

        return array;
    }
}

export default ArrayExpression;
