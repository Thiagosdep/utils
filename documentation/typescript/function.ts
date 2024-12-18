/**
 * Performs a mathematical operation (sum or subtraction) on two numbers.
 *
 * @param x - The first number.
 * @param y - The second number.
 * @param operation - The operation to perform ('sum' or 'sub').
 * @returns The result of the chosen operation.
 */
function resolveOperation(
  x: number,
  y: number,
  operation: "sum" | "sub"
): number {
  if (operation === "sum") {
    return x + y;
  } else {
    return x - y;
  }
}

/**
 * Performs a mathematical operation (sum or subtraction) on two numbers using an interface for parameters.
 *
 * @param params - An object containing the parameters for the operation.
 * @param params.x - The first number.
 * @param params.y - The second number.
 * @param params.operation - The operation to perform ('sum' or 'sub').
 * @returns The result of the chosen operation.
 */
function resolveOperationWithInterface(params: ResolveOperation): number {
  if (params.operation === "sum") {
    return params.x + params.y;
  } else {
    return params.x - params.y;
  }
}

/**
 * Interface for the parameters required to perform an operation.
 *
 * @interface ResolveOperation
 * @property {number} x - The first number.
 * @property {number} y - The second number.
 * @property {Operation} operation - The operation to perform.
 */
interface ResolveOperation {
  x: number;
  y: number;
  operation: "sum" | "sub";
}
