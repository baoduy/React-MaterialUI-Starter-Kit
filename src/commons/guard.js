//Some basic validation and exception

export function argumentNotNull(object, name) {
  if (object === null || object === undefined)
    throw `${name || "Argument"} must not be null or undefined.`;
}

export function argumentNotEmpty(object, name) {
  argumentNotNull(object, name);
  if (object === "") throw `${name || "Argument"} must not be empty.`;
}

export function argumentIsFunc(func, name) {
  if (typeof func !== "function")
    throw `${name || "Argument"} is must be a function.`;
}

export function argumentIsString(object, name) {
  if (typeof object !== "string")
    throw `${name || "Argument"} is must be a string.`;
}

export function argumentIsStringAndNotEmpty(object, name) {
  argumentNotEmpty(object, name);
  argumentIsString(object.name);
}
