import {ArithmeticAbstract} from "../index";

class RemainderExpression extends ArithmeticAbstract {
    public async calculate() {
        const [left, right] = await this.calculateOperands();

        return left % right;
    }
}

export default RemainderExpression;
