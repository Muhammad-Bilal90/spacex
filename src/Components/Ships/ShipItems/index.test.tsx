import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShipListContainer from "./index";
import { ShipItemsQuery, useShipItemsQuery } from "../../../generated/graphql";
import { BrowserRouter as Router } from "react-router-dom";
import ShipItemsContainer from "./index";

jest.mock("../../../generated/graphql.tsx");

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
};

const mockeduseShipListQuery = useShipItemsQuery as jest.Mock;


// TEST: 1

test("Testing Shup List page when there is no data locally stored", () => {
  mockeduseShipListQuery.mockReturnValue({
    loading: false,
    error: false,
    data: ships,
  });

  Storage.prototype.getItem = jest.fn((Ships) => null);

  const renderObj = render(
    <Router>
      {" "}
      <ShipListContainer></ShipListContainer>{" "}
    </Router>
  );

  const items = renderObj.getAllByTitle("shipCard");
  const name1 = renderObj.getByText(/American Champion/i);
  const name2 = renderObj.getByText(/American Islander/i);
  const year1 = renderObj.getByText(/1976/i);

  const images = renderObj.getAllByRole("img");
  const loading = renderObj.queryByText(/Loading.../i);
  const error = renderObj.queryByText(/Error/i);
  const heading = renderObj.getByText(/Ships Launched by SpaceX/i);

  expect(items.length).toEqual(2);
  expect(images[0]).toHaveAttribute("src", "https://i.imgur.com/woCxpkj.jpg");
  expect(images[1]).toHaveAttribute("src", "https://i.imgur.com/jmj8Sh2.jpg");
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(year1).toBeInTheDocument();

  expect(loading).toBeNull();
  expect(error).toBeNull();
  expect(heading).toBeInTheDocument();

  act(() => {
    fireEvent(images[0], new Event("error"));
  });
  expect(images[0]).toHaveAttribute("src", "no_image_available.jpg");

  act(() => {
    fireEvent(images[1], new Event("error"));
  });
  expect(images[1]).toHaveAttribute("src", "no_image_available.jpg");

  // TESTING 'LEARN MORE' BUTTON

  const Item = renderObj.getAllByRole("link");
  expect(Item[0]).toHaveAttribute("href", "/shipItems/AMERICANCHAMPION");
  expect(Item[1]).toHaveAttribute("href", "/shipItems/AMERICANISLANDER");

  act(() => {
    fireEvent.click(Item[0]);
  });

  expect(location.pathname).toBe("/shipItems/AMERICANCHAMPION");

  act(() => {
    fireEvent.click(Item[1]);
  });
  expect(location.pathname).toBe("/shipItems/AMERICANISLANDER");
});


// TEST: 2

test("Testing Ship Items page when data is locally stored", () => {
  mockeduseShipListQuery.mockReturnValue({
    loading: false,
    error: false,
    data: ships,
  });

  const savedData = JSON.stringify(ships);

  Storage.prototype.setItem = jest.fn((Ships, savedData) => null);
  Storage.prototype.getItem = jest.fn((Ships) => savedData);

  const renderObj = render(
    <Router>
      {" "}
      <ShipListContainer></ShipListContainer>{" "}
    </Router>
  );

  const items = renderObj.getAllByTitle("shipCard");
  const name1 = renderObj.getByText(/American Champion/i);
  const name2 = renderObj.getByText(/American Islander/i);
  const year1 = renderObj.getByText(/1976/i);

  const images = renderObj.getAllByRole("img");
  const loading = renderObj.queryByText(/Loading.../i);
  const error = renderObj.queryByText(/ERROR/i);
  const heading = renderObj.getByText(/Ships Launched by SpaceX/i);

  expect(items.length).toEqual(2);
  expect(images[0]).toHaveAttribute("src", "https://i.imgur.com/woCxpkj.jpg");
  expect(images[1]).toHaveAttribute("src", "https://i.imgur.com/jmj8Sh2.jpg");
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(year1).toBeInTheDocument();

  expect(loading).toBeNull();
  expect(error).toBeNull();
  expect(heading).toBeInTheDocument();

  act(() => {
    fireEvent(images[0], new Event("error"));
  });
  expect(images[0]).toHaveAttribute("src", "no_image_available.jpg");

  act(() => {
    fireEvent(images[1], new Event("error"));
  });
  expect(images[1]).toHaveAttribute("src", "no_image_available.jpg");

  // TESTING 'LEARN MORE' BUTTON

  const Item = renderObj.getAllByRole("link");
  expect(Item[0]).toHaveAttribute("href", "/shipItems/AMERICANCHAMPION");
  expect(Item[1]).toHaveAttribute("href", "/shipItems/AMERICANISLANDER");

  act(() => {
    fireEvent.click(Item[0]);
  });

  expect(location.pathname).toBe("/shipItems/AMERICANCHAMPION");

  act(() => {
    fireEvent.click(Item[1]);
  });
  expect(location.pathname).toBe("/shipItems/AMERICANISLANDER");
});


// TEST: 3

test("Testing Ship Items page when the locally stored data is old and needs to be updated from the server", () => {
  mockeduseShipListQuery.mockReturnValue({
    loading: false,
    error: false,
    data: ships,
  });

  const cachedData: ShipItemsQuery = {
    ships: [
      {
        ship_id: "ENGLISHCHAMP",
        ship_name: "English Champion OLD",
        ship_model: "abc",
        ship_type: "Tug123",
        active: false,
        roles: ["Dragon Recovery", "Barge Tug"],
        year_built: 1986,
        successful_landings: null,
        attempted_landings: 2,
        image: "https://i.imgur.com/wsadoCxpkj.jpg",
      },
      {
        ship_id: "PAKISTANCHAMP",
        ship_name: "Pakistani Islander",
        ship_model: null,
        ship_type: "cargo321",
        active: true,
        roles: ["Barge Tug"],
        year_built: 1990,
        successful_landings: 5,
        attempted_landings: null,
        image: "https://i.imgur.com/jmj82131Sh2.jpg",
      },
    ],
  }

  const oldCachedData = JSON.stringify(cachedData);
  const newCachedData = JSON.stringify(ships);

  Storage.prototype.getItem = jest.fn((Ships) => oldCachedData);
  Storage.prototype.setItem = jest.fn((Ships, newCachedData) => null);

  const renderObj = render(<Router><ShipItemsContainer></ShipItemsContainer></Router>);

  const items = renderObj.getAllByTitle("shipCard");
  const name1 = renderObj.getByText(/American Champion/i);
  const name2 = renderObj.getByText(/American Islander/i);
  const year1 = renderObj.getByText(/1976/i);
  const images = renderObj.getAllByRole("img");
  const loading = renderObj.queryByText(/Loading.../i);
  const error = renderObj.queryByText(/ERROR/i);
  const heading = renderObj.getByRole('heading', { name: /Ships Launched by SpaceX/i });

  expect(items).toHaveLength(2);
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(year1).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", "https://i.imgur.com/woCxpkj.jpg");
  expect(images[1]).toHaveAttribute("src", "https://i.imgur.com/jmj8Sh2.jpg");
  expect(loading).toBeNull();
  expect(error).toBeNull();
  expect(heading).toBeInTheDocument();

  act(() => {
    fireEvent(images[0], new Event('error'));
  });
  expect(images[0]).toHaveAttribute("src", "no_image_available.jpg");

  act(() => {
    fireEvent(images[1], new Event('error'));
  });
  expect(images[1]).toHaveAttribute("src", "no_image_available.jpg");

  // Testing Read More Button

  const item = renderObj.getAllByRole('link');
  expect(item[0]).toHaveAttribute("href", "/shipItems/AMERICANCHAMPION");
  expect(item[1]).toHaveAttribute("href", "/shipItems/AMERICANISLANDER");

  act(() => {
    fireEvent.click(item[0]);
  });
  expect(location.pathname).toBe("/shipItems/AMERICANCHAMPION");

  act(() => {
    fireEvent.click(item[1]);
  });
  expect(location.pathname).toBe("/shipItems/AMERICANISLANDER");

});

test("Testing Ship Items page when there no data locally stored and the page is loading data from the server", () => {
  mockeduseShipListQuery.mockReturnValue({
    loading: true,
    error: false,
    data: null || undefined
  });

  const cachedData= null;

  Storage.prototype.setItem = jest.fn((Ships, cachedData) => null);
  Storage.prototype.getItem = jest.fn((Ships) => null);

  const renderObj = render(<Router><ShipItemsContainer/></Router>);

  const loading = renderObj.getByText(/Loading.../i);
  const error = renderObj.queryByText(/ERROR/i);
  const shipData = renderObj.queryAllByTitle("card");

  expect(loading).toBeInTheDocument();
  expect(error).toBeNull();
  expect(shipData).toHaveLength(0);


});

test("Testing Ship Items page when there is no data locally stored and there is an error or no data", () => {
  mockeduseShipListQuery.mockReturnValue({
    loading: false,
    error: true,
    data: null || undefined
    });

    const cachedData = null;

    Storage.prototype.setItem = jest.fn((Ships, cachedData) => null);
    Storage.prototype.getItem = jest.fn((Ships) => null);

    const renderObj = render(<Router><ShipItemsContainer/></Router>);

    const loading = renderObj.queryByText(/Loading.../i);
    const error = renderObj.getByText(/Error/i);
    const shipData = renderObj.queryByTitle("card");

    expect(loading).toBeNull();
    expect(error).toBeInTheDocument();
    expect(shipData).toBeNull();
});