import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";
import expenses from "../fixtures/expenses";

test("should render notfoundpage", ()=> {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});