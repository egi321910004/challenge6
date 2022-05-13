import { render, screen } from "@testing-library/react";
import Landing from "./Landing";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

it("Should be display text Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)", () => {
    const initialState = { dataLogin: null };
    const mockConfigStore = configureStore();
    const mockStore  = mockConfigStore(initialState);

    render(
        <Provider store={mockStore}>
            <Landing />
        </Provider>
    );
    
    const titlePage = screen.getByText("Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)");
    expect(titlePage).toBeInTheDocument();
});