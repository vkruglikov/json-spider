import createExpression from "../createExpression";
import Expression, {JsonExpression} from "../Expression";

interface Content {
    key: string;
    value: JsonExpression;
}

interface ObjectJsonExpression extends JsonExpression {
    content: Content[];
}

class ObjectExpression extends Expression {
    public static createFromJsonExpression(jsonExpression: ObjectJsonExpression) {
        return new this({
            type: jsonExpression.type,
            content: jsonExpression.content.map(({key, value}) => ({
                key,
                value: createExpression(value),
            })),
        });
    }

    private readonly content: Content[];

    constructor({content}: ObjectJsonExpression) {
        super();
        this.content = content;
    }

    public async calculate() {
        const object = await this.content.reduce(async (memo, {key, value: expression}) => ({
            ...(await memo),
            [key]: await expression.calculate(),
        }), Promise.resolve({}));

        return object;
    }
}

export default ObjectExpression;
