### JsonSpider weaves logic from json

#### Constant expression
```javascript
// Will output 1

console.log(calculateExpression({
    type: 'CONSTANT',
    value: 'test',
    valueType: 'STRING'
}));
```
#### Division expression
```javascript
// Will output 10

console.log(calculateExpression({
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
}))
```