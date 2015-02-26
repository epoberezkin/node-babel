# node-babel

Babel require hook with whitelist of transpilers for es6 features that node 0.12 with harmony flag does not support.


Usage:

```
require('node-babel')();
```

or

```
require('node-babel')(options);
```


[Same options](https://babeljs.io/docs/usage/require/) as in babel are supported but if no options are passed only the following transpilers are whitelisted (so none of es6 features supported with --harmony flag will be transpiled):

- es6.classes
- es6.destructuring
- es6.objectSuper
- es6.parameters.default
- es6.parameters.rest
- es6.properties.computed
- es6.properties.shorthand
- es6.spread
- es6.tailCall
- es7.comprehensions
- es7.exponentiationOperator
- useStrict

You can whitelist additional transpilers by passing options or exclude any of the above by blacklisting them.
