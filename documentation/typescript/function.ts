/**
 * a function to do sum and sub operations
 * @param x first number
 * @param y second number
 * @param operation used to indicate the operation
 * @returns result of the chosen operation
 */
function resolveOperation(x: number, y: number, operation: 'sum' | 'sub'): number {
    if (operation === 'sum') {
        return x + y
    }
    else {
        return x - y
    }
}

/**
 * a function to do sum and sub operations
 * @param params ResolveOperation interface
 * @returns result of the chosen operation
 */
function resolveOperationWithInterface(params: ResolveOperation): number {
    if (params.operation === 'sum') {
        return params.x + params.y
    }
    else {
        return params.x - params.y
    }
}

type Operation = 'sum' | 'sub'

interface ResolveOperation {
    x: number
    y: number
    operation: Operation
}