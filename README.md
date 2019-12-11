### JsonSpider weaves logic from json

#### Constant expression
```json5
{
    type: 'CONSTANT',
    value: 'test',
    valueType: 'STRING'
}
```
equivalent value `test`

#### Division expression
```json5
{
    type: 'EXP_DIVISION',
    left: {
        type: 'CONSTANT',
        value: 100,
        valueType: 'NUMBER'
    },
    right: {
        type: 'CONSTANT',
        value: 10,
        valueType: 'NUMBER'
    }
}
```
equivalent value `10`