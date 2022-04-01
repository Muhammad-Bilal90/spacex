import '@testing-library/jest-dom'
import * as React from 'react'
import { ShipItemsQuery, useShipItemsQuery } from "../../../generated/graphql";
import { useParams } from "react-router";
import { render, act, fireEvent } from "@testing-library/react";
import ShipItemDetailsContainer from ".";

jest.mock("../../../generated/graphql.tsx");
jest.mock("react-router");

const ships: ShipItemsQuery = {
  ships: [
    {
      ship_id: "AMERICANCHAMPION",
      ship_name: "American Champion",
      ship_model: null,
      ship_type: "Tug",
      active: false,
      roles: ["Support Ship", "Barge Tug"],
      year_built: 1976,
      successful_landings: null,
      attempted_landings: null,
      image: "https://i.imgur.com/woCxpkj.jpg",
    },
    {
      ship_id: "AMERICANISLANDER",
      ship_name: "American Islander",
      ship_model: null,
      ship_type: "cargo",
      active: false,
      roles: ["Dragon Recovery"],
      year_built: null,
      successful_landings: null,
      attempted_landings: null,
      image: "https://i.imgur.com/jmj8Sh2.jpg",
    },
  ],
}

const mockeduseShipListQuery = useShipItemsQuery as jest.Mock;
const mockeduseParams = useParams as jest.Mock;


// TEST: 1

test("Testing Ship item details page when the data is loaded from server and stored locally",() => {
    
    const savedData = JSON.stringify(ships);
    
    mockeduseShipListQuery.mockReturnValue({
        loading: false,
        error: false,
        data: ships
    });

    mockeduseParams.mockReturnValue({
        id: "AMERICANCHAMPION"
    });

    Storage.prototype.setItem = jest.fn((Ships, savedData) => null)
    Storage.prototype.getItem = jest.fn((Ships) => savedData);

    const renderObj = render(<ShipItemDetailsContainer />);

    const rows = renderObj.getAllByRole("row");
    const row1 = renderObj.getByRole("row", { name: /Specifications Details/i });
    const row2 = renderObj.getByRole("row", { name: /SHIP ID AMERICANCHAMPION/i });
    const row3 = renderObj.getByRole("row", { name: /SHIP MODEL NA/i });
    const row4 = renderObj.getByRole("row", { name: /SHIP TYPE Tug/i });
    const row5 = renderObj.getByRole("row", { name: /ACTIVE No/i });
    const row6 = renderObj.getByRole("row", { name: /ROLES Support Ship, Barge Tug,/i });
    const row7 = renderObj.getByRole("row", { name: /YEAR BUILT 1976/i });
    const row8 = renderObj.getByRole("row", { name: /ATTEMPTED LANDINGS NA/i });
    const row9 = renderObj.getByRole("row", { name: /SUCCESSFUL LANDINGS NA/i });
    const image = renderObj.getByRole("img");
    const heading = renderObj.getByRole("heading", { name: /American Champion/i });
    const loading = renderObj.queryByText("Loading...");
    const error = renderObj.queryByText("ERROR");

    expect(rows).toHaveLength(9);
    expect(row1).toBeInTheDocument();
    expect(row2).toBeInTheDocument();
    expect(row3).toBeInTheDocument();
    expect(row4).toBeInTheDocument();
    expect(row5).toBeInTheDocument();
    expect(row6).toBeInTheDocument();
    expect(row7).toBeInTheDocument();
    expect(row8).toBeInTheDocument();
    expect(row9).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://i.imgur.com/woCxpkj.jpg");
    expect(heading).toBeInTheDocument();
    expect(loading).toBeNull();
    expect(error).toBeNull();

    act(() => {
        fireEvent(image, new Event("error"));
        expect(image).toHaveAttribute("src", 'no_image_available.jpg');
    });
});


// TEST: 2

test("Testing Ship item details page when the data is not stored locally",() => {
    
    const savedData = JSON.stringify(ships);
    
    mockeduseShipListQuery.mockReturnValue({
        loading: false,
        error: false,
        data: ships
    });

    mockeduseParams.mockReturnValue({
        id: "AMERICANCHAMPION"
    });

    Storage.prototype.setItem = jest.fn((Ships, savedData) => null)
    Storage.prototype.getItem = jest.fn((Ships) => null);

    const renderObj = render(<ShipItemDetailsContainer />);

    const rows = renderObj.getAllByRole("row");
    const row1 = renderObj.getByRole("row", { name: /Specifications Details/i });
    const row2 = renderObj.getByRole("row", { name: /SHIP ID AMERICANCHAMPION/i });
    const row3 = renderObj.getByRole("row", { name: /SHIP MODEL NA/i });
    const row4 = renderObj.getByRole("row", { name: /SHIP TYPE Tug/i });
    const row5 = renderObj.getByRole("row", { name: /ACTIVE No/i });
    const row6 = renderObj.getByRole("row", { name: /ROLES Support Ship, Barge Tug,/i });
    const row7 = renderObj.getByRole("row", { name: /YEAR BUILT 1976/i });
    const row8 = renderObj.getByRole("row", { name: /ATTEMPTED LANDINGS NA/i });
    const row9 = renderObj.getByRole("row", { name: /SUCCESSFUL LANDINGS NA/i });
    const image = renderObj.getByRole("img");
    const heading = renderObj.getByRole("heading", { name: /American Champion/i });
    const loading = renderObj.queryByText("Loading...");
    const error = renderObj.queryByText("ERROR");

    expect(rows).toHaveLength(9);
    expect(row1).toBeInTheDocument();
    expect(row2).toBeInTheDocument();
    expect(row3).toBeInTheDocument();
    expect(row4).toBeInTheDocument();
    expect(row5).toBeInTheDocument();
    expect(row6).toBeInTheDocument();
    expect(row7).toBeInTheDocument();
    expect(row8).toBeInTheDocument();
    expect(row9).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://i.imgur.com/woCxpkj.jpg");
    expect(heading).toBeInTheDocument();
    expect(loading).toBeNull();
    expect(error).toBeNull();

    act(() => {
        fireEvent(image, new Event("error"));
        expect(image).toHaveAttribute("src", 'no_image_available.jpg');
    });
});


// TEST: 3

test("Testing Ship item details page when there is no data locally stored and page is waiting for the data to be loaded from the server", () => {
  mockeduseShipListQuery.mockReturnValue({
    loading: true,
    error: false,
    data: null || undefined
  });

  mockeduseParams.mockReturnValue({
    id: "AMERICANCHAMPION"
  });

  Storage.prototype.getItem = jest.fn((Ships) => null);

  const renderObj = render(<ShipItemDetailsContainer />);

  const loading = renderObj.getByText("Loading...");
  const error = renderObj.queryByText("ERROR");
  const shipData = renderObj.queryByTitle("shipItemDetails");

  expect(loading).toBeInTheDocument();
  expect(error).toBeNull();
  expect(shipData).toBeNull();
});

// TEST: 4

test("Testing Ship item details page when there is no data locally stored and there is a error in loading data from the server", () => {
  mockeduseShipListQuery.mockReturnValue({
    loading: false,
    error: true,
    data: null || undefined
  });

  mockeduseParams.mockReturnValue({
    id: "AMERICANCHAMPION"
  });

  Storage.prototype.getItem = jest.fn((Ships) => null);

  const renderObj = render(<ShipItemDetailsContainer />);

  const loading = renderObj.queryByText("Loading...");
  const error = renderObj.getByText("Error");
  const shipData = renderObj.queryByTitle("shipItemDetails");

  expect(loading).toBeNull();
  expect(error).toBeInTheDocument();
  expect(shipData).toBeNull();
});