/**
 * @param input
 * @returns {string}
 */
export default function classnames(...input) {
    let value,
        output = '';

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            value = toValue(arguments[i]);

            if (value) {
                output && (output += ' ');
                output += value;
            }
        }
    }

    return output;
}

/**
 * @param input
 * @returns {string}
 */
function toValue(input) {
    let i,
        key,
        value,
        output = '';

    if (typeof input === 'string' || typeof input === 'number') {
        output += input;
    } else if (typeof input === 'object') {
        if (Array.isArray(input)) {
            for (i = 0; i < input.length; i++) {
                if (input[i]) {
                    value = toValue(input[i])

                    if (value) {
                        output && (output += ' ');
                        output += value;
                    }
                }
            }
        } else {
            for (key in input) {
                if (input[key]) {
                    output && (output += ' ');
                    output += key;
                }
            }
        }
    }

    return output;
}
