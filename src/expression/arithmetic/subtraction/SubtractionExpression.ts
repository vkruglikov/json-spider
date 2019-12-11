import {ArithmeticAbstract} from "../index";

class SubtractionExpression extends ArithmeticAbstract {
    public async calculate() {
        const [left, right] = await this.calculateOperands();

        return left - right;
    }
}

export default SubtractionExpression;
