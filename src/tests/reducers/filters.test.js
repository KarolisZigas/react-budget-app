import filtersReducer from '../../reducers/filters'
import moment from 'moment';

test("should setup default filter values", () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
});

test("should set sortby to amount", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe("amount");
});

test("should set sortby to date", () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount",
    };
    const action = {type: "SORT_BY_DATE"};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
    const text = "this is my filter";
    const action = {
        type: "SET_TEXT",
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe("this is my filter");
});

test("should set startDate filter", () => {
    const date = 10000;
    const action = {
        type: "SET_START_DATE",
        date
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(10000);
});

test("should set endDate filter", () => {
    const date = 10000;
    const action = {
        type: "SET_END_DATE",
        date
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(10000);
});