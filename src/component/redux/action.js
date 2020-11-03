export const Filter = (val) => ({
    type: "FILTER_LIST",
    payload: val
})
export const FilterR = (val, city) => ({
    type: "FILTER_WLIST",
    payload: val
})