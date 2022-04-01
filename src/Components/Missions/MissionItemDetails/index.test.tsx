import '@testing-library/jest-dom'
import * as React from 'react'
import { render, act, fireEvent } from "@testing-library/react";
import {
  useMissionItemsQuery,
  MissionItemsQuery,
} from "../../../generated/graphql";
import { useParams } from "react-router-dom";
import MissionItemDetailsContainer from ".";

jest.mock("../../../generated/graphql.tsx");
jest.mock("react-router-dom");

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
const mockeduseParams = useParams as jest.Mock;


// TEST: 1

test("Testing Mission items details page when the data is successfully loaded from the server and is stored locally", () => {
    mockeduseMissionItemsQuery.mockReturnValue({
        loading: false,
        false: false,
        data: missions
    });

    mockeduseParams.mockReturnValue({
        id: "9D1B7E0"
    });

    const savedData = JSON.stringify(missions);

    Storage.prototype.setItem = jest.fn((Missions, savedData) => null);
    Storage.prototype.getItem = jest.fn((Missions) => savedData);

    const renderObj = render(<MissionItemDetailsContainer />);

    const rows = renderObj.getAllByRole("row");
    const heading = renderObj.getByRole("heading", { name: /Thaicom/i });
    const description = renderObj.getByText(/Description 1/i);
    const row1 = renderObj.getByRole("row", { name: /Specifications Details/i});
    const row2 = renderObj.getByRole("row", { name: /MANUFACTURERS Orbital ATK/i});
    const row3 = renderObj.getByRole("row", { name: /WEBSITE LINK/i});
    const row4 = renderObj.getByRole("row", { name: /WIKIPEDIA LINK/i});
    const row5 = renderObj.getByRole("row", { name: /TWITTER LINK/i});
    const links = renderObj.getAllByRole("link");
    const loading = renderObj.queryByText(/Loading.../i);
    const error = renderObj.queryByText(/Error/i);

    expect(rows).toHaveLength(5);
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(row1).toBeInTheDocument();
    expect(row2).toBeInTheDocument();
    expect(row3).toBeInTheDocument();
    expect(row4).toBeInTheDocument();
    expect(row5).toBeInTheDocument();
    expect(links[0]).toHaveAttribute("href", "http://www.thaicom.net/en/satellites/overview");
    expect(links[1]).toHaveAttribute("href", "https://en.wikipedia.org/wiki/Thaicom");
    expect(links[2]).toHaveAttribute("href", "https://twitter.com/thaicomplc");
});


// TEST: 2

test("Testing Mission items details page when the data is successfully loaded from the server but not stored locally", () => {
    mockeduseMissionItemsQuery.mockReturnValue({
        loading: false,
        false: false,
        data: missions
    });

    mockeduseParams.mockReturnValue({
        id: "9D1B7E0"
    });

    const savedData = JSON.stringify(missions);

    Storage.prototype.setItem = jest.fn((Missions, savedData) => null);
    Storage.prototype.getItem = jest.fn((Missions) => null);

    const renderObj = render(<MissionItemDetailsContainer />);

    const rows = renderObj.getAllByRole("row");
    const heading = renderObj.getByRole("heading", { name: /Thaicom/i });
    const description = renderObj.getByText(/Description 1/i);
    const row1 = renderObj.getByRole("row", { name: /Specifications Details/i});
    const row2 = renderObj.getByRole("row", { name: /MANUFACTURERS Orbital ATK/i});
    const row3 = renderObj.getByRole("row", { name: /WEBSITE LINK/i});
    const row4 = renderObj.getByRole("row", { name: /WIKIPEDIA LINK/i});
    const row5 = renderObj.getByRole("row", { name: /TWITTER LINK/i});
    const links = renderObj.getAllByRole("link");
    const loading = renderObj.queryByText(/Loading.../i);
    const error = renderObj.queryByText(/Error/i);

    expect(rows).toHaveLength(5);
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(row1).toBeInTheDocument();
    expect(row2).toBeInTheDocument();
    expect(row3).toBeInTheDocument();
    expect(row4).toBeInTheDocument();
    expect(row5).toBeInTheDocument();
    expect(links[0]).toHaveAttribute("href", "http://www.thaicom.net/en/satellites/overview");
    expect(links[1]).toHaveAttribute("href", "https://en.wikipedia.org/wiki/Thaicom");
    expect(links[2]).toHaveAttribute("href", "https://twitter.com/thaicomplc");
});


// TEST: 3

test("Testing Mission item details page when the page is waitng for the data from the server", () => {
    mockeduseMissionItemsQuery.mockReturnValue({
        loading: true,
        error: false,
        data: null || undefined
    });

    mockeduseParams.mockReturnValue({
        id: "9D1B7E0"
    });

    const renderObj = render(<MissionItemDetailsContainer />);

    const loading = renderObj.getByText(/Loading.../i);
    const error = renderObj.queryByText(/ERROR/i);
    const missionData = renderObj.queryByTitle(/missionsCard/i);

    expect(loading).toBeInTheDocument();
    expect(error).toBeNull();
    expect(missionData).toBeNull();
});


// TEST: 4

test("Testing Mission item details page when the page is waitng for the data from the server", () => {
    mockeduseMissionItemsQuery.mockReturnValue({
        loading: false,
        error: true,
        data: null || undefined
    });

    mockeduseParams.mockReturnValue({
        id: "9D1B7E0"
    });

    const renderObj = render(<MissionItemDetailsContainer />);

    const loading = renderObj.queryByText(/Loading.../i);
    const error = renderObj.getByText(/Error/i);
    const missionData = renderObj.queryByTitle(/missionsCard/i);

    expect(loading).toBeNull();
    expect(error).toBeInTheDocument();
    expect(missionData).toBeNull();
});