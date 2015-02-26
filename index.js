var _ = require('mol-proto');

module.exports = function(options) {
    options = options || {};
    options.whitelist = _.unique((options.whitelist || []).concat([
        // '[asyncToGenerator]',
        // '[bluebirdCoroutines]',
        // 'es3.memberExpressionLiterals',
        // 'es3.propertyLiterals',
        // 'es5.properties.mutators',
        // 'es6.arrowFunctions',                    // supported
        // 'es6.blockScoping',                      // supported
        // '[es6.blockScopingTDZ]',
        'es6.classes',
        // 'es6.constants',                         // supported
        'es6.destructuring',
        // 'es6.forOf',                             // supported
        // 'es6.modules',                           // supported
        'es6.objectSuper',
        'es6.parameters.default',
        'es6.parameters.rest',
        'es6.properties.computed',
        'es6.properties.shorthand',
        'es6.spread',
        'es6.tailCall',
        // 'es6.templateLiterals',                  // supported
        // 'es6.unicodeRegex',
        // 'es7.abstractReferences',
        'es7.comprehensions',
        'es7.exponentiationOperator',
        // 'es7.objectRestSpread',
        // 'flow',
        // '[minification.deadCodeElimination]',
        // '[minification.removeConsoleCalls]',
        // '[minification.removeDebugger]',
        // '[minification.renameLocalVariables]',
        // 'playground.malletOperator',
        // 'playground.memoizationOperator',
        // 'playground.methodBinding',
        // 'playground.objectGetterMemoization',
        // 'react',
        // '[reactCompat]',
        // 'regenerator',
        // '[selfContained]',
        // 'spec.blockScopedFunctions',
        // '[spec.protoToAssign]',
        // '[spec.typeofSymbol]',
        // '[spec.undefinedToVoid]',
        'useStrict',
        // 'validation.noForInOfAssignment',
        // 'validation.react',
        // 'validation.setters',
        // '[validation.undeclaredVariableCheck]'
    ]));

    var bl = options.blacklist;
    bl &&  bl.forEach(function(transpiler) {
        _.spliceItem(options.whitelist, transpiler);
    });

    require('babel/register')(options);
};
