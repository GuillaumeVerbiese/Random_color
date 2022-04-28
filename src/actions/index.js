/* eslint-disable import/prefer-default-export */

export const CHANGE_DIRECTION_TO_LEFT = 'CHANGE_DIRECTION_TO_LEFT';

export function changeDirectionToLeft() {
  return { type: CHANGE_DIRECTION_TO_LEFT };
}
export const CHANGE_DIRECTION_TO_RIGHT = 'CHANGE_DIRECTION_TO_RIGHT';
export function changeDirectionToRight() {
  return { type: CHANGE_DIRECTION_TO_RIGHT };
}

export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export function changeFirstColor(color) {
  return { type: CHANGE_FIRST_COLOR, color: color };
}
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';
export function changeLastColor(color) {
  return { type: CHANGE_LAST_COLOR, color };
}
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

export function changeDirection(newDirection) {
  return {
    type: CHANGE_DIRECTION,
    direction: newDirection,
  };
}
