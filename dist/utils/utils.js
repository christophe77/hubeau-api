"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToStringParameters = void 0;
function objectToStringParameters(params) {
    let formattedParams = '';
    Object.keys(params).map(param => {
        formattedParams = formattedParams + `&${param}=${params[param]}`;
    });
    return formattedParams;
}
exports.objectToStringParameters = objectToStringParameters;
