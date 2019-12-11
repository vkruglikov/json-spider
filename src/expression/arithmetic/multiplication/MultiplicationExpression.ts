import {ArithmeticAbstract} from "../index";

class MultiplicationExpression extends ArithmeticAbstract {
    public async calculate() {
        const [left, right] = await this.calculateOperands();

        return left * right;
    }
}

export default MultiplicationExpression;
