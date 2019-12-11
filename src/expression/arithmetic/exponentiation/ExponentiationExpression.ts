import {ArithmeticAbstract} from "../index";

class ExponentiationExpression extends ArithmeticAbstract {
    public async calculate() {
        const [left, right] = await this.calculateOperands();

        return left ** right;
    }
}

export default ExponentiationExpression;
