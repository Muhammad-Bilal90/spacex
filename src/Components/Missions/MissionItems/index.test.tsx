import '@testing-library/jest-dom'
import * as React from 'react'
import { render, act, fireEvent, screen } from "@testing-library/react";
import {
  useMissionItemsQuery,
  MissionItemsQuery,
} from "../../../generated/graphql";
import MissionItemsContainer from ".";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../../generated/graphql.tsx");

const missions: MissionItemsQuery = {
  missions: [
    {
      mission_id: "9D1B7E0",
      mission_name: "Thaicom",
      manufacturers: ["Orbital ATK"],
      description: "Description 1",
      wikipedia: "https://en.wikipedia.org/wiki/Thaicom",
      website: "http://www.thaicom.net/en/satellites/overview",
      twitter: "https://twitter.com/thaicomplc",
    },
    {
      mission_id: "F4F83DE",
      mission_name: "Telstar",
      manufacturers: ["SSL"],
      description: "Description 2",
      wikipedia: "https://en.wikipedia.org/wiki/Telesat",
      website: "https://www.telesat.com/",
      twitter: null,
    },
  ],
};

const mockeduseMissionItemsQuery = useMissionItemsQuery as jest.Mock;

// TEST: 1

test("Testing Mission Items page when the data is successfully loaded from the server and stored locally", () => {
  mockeduseMissionItemsQuery.mockReturnValue({
    loading: false,
    error: false,
    data: missions,
  });

  const savedData = JSON.stringify(missions);

  Storage.prototype.setItem = jest.fn((Missions, savedData) => null);
  Storage.prototype.getItem = jest.fn((Missions) => savedData);

  render(
    <Router>
      <MissionItemsContainer />
    </Router>
  );

  const cardItems = screen.getAllByTitle("missionsCard");
  const name1 = screen.getByText(/Thaicom/i);
  const name2 = screen.getByText(/Telstar/i);
  const description1 = screen.getByText(/Description 1/i);
  const description2 = screen.getByText(/Description 2/i);
  const loading = screen.queryByText(/Loading.../i);
  const error = screen.queryByText(/ERROR/i);

  expect(cardItems).toHaveLength(2);
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(description1).toBeInTheDocument();
  expect(description2).toBeInTheDocument();
  expect(loading).toBeNull();
  expect(error).toBeNull();

  // Testing Learn More Button

  const linkItems = screen.getAllByRole("link");

  expect(linkItems[0]).toHaveAttribute("href", "/missionItems/9D1B7E0");
  expect(linkItems[1]).toHaveAttribute("href", "/missionItems/F4F83DE");

  act(() => {
    fireEvent.click(linkItems[0]);
    expect(location.pathname).toBe("/missionItems/9D1B7E0");
  });

  act(() => {
    fireEvent.click(linkItems[1]);
    expect(location.pathname).toBe("/missionItems/F4F83DE");
  });
});

// TEST: 2

test("Testing Mission Items page when there is not data stored locally from the server", () => {
  mockeduseMissionItemsQuery.mockReturnValue({
    loading: false,
    error: false,
    data: missions,
  });

  const savedData = JSON.stringify(missions);

  Storage.prototype.setItem = jest.fn((Missions, savedData) => null);
  Storage.prototype.getItem = jest.fn((Missions) => null);

  render(
    <Router>
      <MissionItemsContainer />
    </Router>
  );

  const cardItems = screen.getAllByTitle("missionsCard");
  const name1 = screen.getByText(/Thaicom/i);
  const name2 = screen.getByText(/Telstar/i);
  const description1 = screen.getByText(/Description 1/i);
  const description2 = screen.getByText(/Description 2/i);
  const loading = screen.queryByText(/Loading.../i);
  const error = screen.queryByText(/ERROR/i);

  expect(cardItems).toHaveLength(2);
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(description1).toBeInTheDocument();
  expect(description2).toBeInTheDocument();
  expect(loading).toBeNull();
  expect(error).toBeNull();

  // Testing Learn More Button

  const linkItems = screen.getAllByRole("link");

  expect(linkItems[0]).toHaveAttribute("href", "/missionItems/9D1B7E0");
  expect(linkItems[1]).toHaveAttribute("href", "/missionItems/F4F83DE");

  act(() => {
    fireEvent.click(linkItems[0]);
    expect(location.pathname).toBe("/missionItems/9D1B7E0");
  });

  act(() => {
    fireEvent.click(linkItems[1]);
    expect(location.pathname).toBe("/missionItems/F4F83DE");
  });
});

// TEST: 3

test("Testing Mission Items page when there is old data stored locally and new data needs to be updated from the server", () => {
    mockeduseMissionItemsQuery.mockReturnValue({
      loading: false,
      error: false,
      data: missions,
    });

  const oldMissions: MissionItemsQuery = {
    missions: [
      {
        mission_id: "9D1B7E0123",
        mission_name: "Intercom",
        manufacturers: ["Orbital ATK 1"],
        description: "Description old 1",
        wikipedia: "https://en.wikipedia.org/wiki/Thaicomold",
        website: "http://www.thaicom.net/en/satellites/overviewold",
        twitter: "https://twitter.com/thaicomplcold",
      },
      {
        mission_id: "F4F83DE123",
        mission_name: "Moviestar",
        manufacturers: ["SSL 1"],
        description: "Description old 2",
        wikipedia: "https://en.wikipedia.org/wiki/Telesatold",
        website: "https://www.telesat.com/old",
        twitter: null,
      },
    ],
  };


  const oldCachedData = JSON.stringify(oldMissions);
  const newCachingData = JSON.stringify(missions);

  Storage.prototype.getItem = jest.fn((Missions) => newCachingData);
  Storage.prototype.setItem = jest.fn((Missions, newCachingData) => null);

  render(
    <Router>
      <MissionItemsContainer />
    </Router>
  );

  const cardItems = screen.getAllByTitle("missionsCard");
  const name1 = screen.getByText(/Thaicom/i);
  const name2 = screen.getByText(/Telstar/i);
  const description1 = screen.getByText(/Description 1/i);
  const description2 = screen.getByText(/Description 2/i);
  const loading = screen.queryByText(/Loading.../i);
  const error = screen.queryByText(/ERROR/i);

  expect(cardItems).toHaveLength(2);
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(description1).toBeInTheDocument();
  expect(description2).toBeInTheDocument();
  expect(loading).toBeNull();
  expect(error).toBeNull();

  // Testing Learn More Button

  const linkItems = screen.getAllByRole("link");

  expect(linkItems[0]).toHaveAttribute("href", "/missionItems/9D1B7E0");
  expect(linkItems[1]).toHaveAttribute("href", "/missionItems/F4F83DE");

  act(() => {
    fireEvent.click(linkItems[0]);
    expect(location.pathname).toBe("/missionItems/9D1B7E0");
  });

  act(() => {
      fireEvent.click(linkItems[1]);
      expect(location.pathname).toBe("/missionItems/F4F83DE");
    });
});


//   TEST: 4

test("testing Mission items page when there is no data loaded and page is looking for the data from the server", () => {
    mockeduseMissionItemsQuery.mockReturnValue({
        loading: true,
        error: false,
        data: null || undefined
    });

    render(<Router><MissionItemsContainer /></Router>)

    const loading = screen.getByText(/Loading.../i);
    const error = screen.queryByText(/ERROR/i);
    const missionData = screen.queryByTitle(/missionsCard/i);

    expect(loading).toBeInTheDocument();
    expect(error).toBeNull();
    expect(missionData).toBeNull();
});


// TEST: 5

test("testing Mission items page when there is no data loaded and page is looking for the data from the server", () => {
    mockeduseMissionItemsQuery.mockReturnValue({
        loading: false,
        error: true,
        data: null || undefined
    });

    render(<Router><MissionItemsContainer /></Router>)

    const loading = screen.queryByText(/Loading.../i);
    const error = screen.getByText(/Error/i);
    const missionData = screen.queryByTitle(/missionsCard/i);

    expect(loading).toBeNull();
    expect(error).toBeInTheDocument();
    expect(missionData).toBeNull();
});