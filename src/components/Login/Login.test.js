import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

it("Should be display text Welcome", () => {
    const initialState = { dataLogin: null };
    const mockConfigStore = configureStore();
    const mockStore  = mockConfigStore(initialState);

    render(
        <Provider store={mockStore}>
            <Login />
        </Provider>
    );
    
    const titlePage = screen.getByText("Welcome");
    expect(titlePage).toBeInTheDocument();
});