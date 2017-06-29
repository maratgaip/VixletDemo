export const SET_DATA = 'app/SET_DATA';

export function setData(data) {
  return {
    type: SET_DATA,
    data,
  };
}
