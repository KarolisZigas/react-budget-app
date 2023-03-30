import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    })
});

test("Should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0),
    })
});

test("should generate set text filter action object with value", () => {
    const testText = "ABCDE"
    const action = setTextFilter(testText);
    expect(action).toEqual({
        type: "SET_TEXT",
        text: "ABCDE"
    })
});

test("should generate set text filter action object without value", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT",
        text: ""
    })
});

test("should generate sort by amount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
});

test("should generate sort by date action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
});