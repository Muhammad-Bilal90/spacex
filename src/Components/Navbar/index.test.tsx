import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from './navbar';

test("Testing Home Component", () => {
    render(<Router><NavigationBar /></Router>);

    const main = screen.getByTestId("navbar");
    const missions = screen.getByText(/Missions/i);
    const rockets = screen.getByText(/Rockets/i);
    const ships = screen.getByText(/Ships/i);
    const images = screen.getAllByRole("img");

    expect(main).toBeInTheDocument();
    expect(missions).toBeInTheDocument();
    expect(rockets).toBeInTheDocument();
    expect(ships).toBeInTheDocument();
    expect(images[0]).toHaveAttribute("src", "Logo.jpeg");
    expect(images[1]).toHaveAttribute("src", "toggle.png");

    act(() => {
        fireEvent.click(missions);
        expect(location.pathname).toBe("/missionItems");
    });

    act(() => {
        fireEvent.click(rockets);
        expect(location.pathname).toBe("/rocketItems");
    });

    act(() => {
        fireEvent.click(ships);
        expect(location.pathname).toBe("/shipItems");
    });

});