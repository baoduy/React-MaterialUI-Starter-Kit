//Some basic validation and exception
import {
  isNull,
  isUndefined,
  isEmpty,
  isFunction,
  isString,
  isArray
} from 'lodash';

export function argumentNotNull(object, name) {
  if (isNull(object) || isUndefined(object))
    throw `${name || 'Argument'} must not be null or undefined.`;
}

export function argumentNotEmpty(object, name) {
  argumentNotNull(object, name);
  if (isEmpty(object)) throw `${name || 'Argument'} must not be empty.`;
}

export function argumentIsFunc(func, name) {
  if (!isFunction(func)) throw `${name || 'Argument'} is must be a Function.`;
}

export function argumentIsString(object, name) {
  if (!isString(object)) throw `${name || 'Argument'} is must be a String.`;
}

export function argumentIsStringAndNotEmpty(object, name) {
  argumentNotEmpty(object, name);
  argumentIsString(object.name);
}

export function argumentIsArray(object, name) {
  if (!isArray(object)) throw `${name || 'Argument'} is must be an Array.`;
}

export function argumentIsArrayAndNotEmpty(object, name) {
  argumentIsArray(object, name);
  if (isEmpty(object)) throw `${name || 'Argument'} is must not be empty.`;
}
