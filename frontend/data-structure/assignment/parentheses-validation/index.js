const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    const stack = new Stack()
    const parentheses = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    if (s.length % 2 !== 0) {
        return false
    } else {
        for (let i = 0; i < s.length; i++) {
            if (parentheses[s[i]]) {
                stack.push(parentheses[s[i]])
            } else if (stack.pop() !== s[i]) {
                return false
            }
        }
    }
    return stack.length === 0
}

module.exports = {
    IsValidParentheses
}