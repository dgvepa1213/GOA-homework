function checkType(value) {
  const primitiveTypes = ["string", "number", "boolean", "undefined", "symbol", "bigint"];
  return (value === null || primitiveTypes.includes(typeof value)) ? "primitive" : "non-primitive";
}