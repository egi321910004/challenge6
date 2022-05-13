import { render, screen } from "@testing-library/react";
import Register from "./Register";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

it("Should be display text Create new Account", () => {
    const initialState = { dataLogin: null };
    const mockConfigStore = configureStore();
    const mockStore  = mockConfigStore(initialState);

    render(
        <Provider store={mockStore}>
            <Register />
        </Provider>
    );
    
    const titlePage = screen.getByText("Create new Account");
    expect(titlePage).toBeInTheDocument();
});