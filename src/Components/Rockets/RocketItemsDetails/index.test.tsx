import '@testing-library/jest-dom'
import * as React from 'react'

import { render, act, fireEvent, } from "@testing-library/react";
import {
  useRocketItemsQuery,
  RocketItemsQuery,
} from "../../../generated/graphql";
import { useParams } from "react-router-dom";
import RocketItemDetailsContainer from ".";

jest.mock("../../../generated/graphql.tsx");
jest.mock("react-router-dom");

const rockets: RocketItemsQuery = {
  rockets: [
    {
      rocket_id: "Falcon1",
      rocket_name: "Falcon 1",
      rocket_type: "rocket",
      description: "rocket 1 description",
      active: false,
      flickr_images: [
        "https://imgur.com/DaCsadafMsj.jpg",
        "https://imgur.com/azYafd8.jpg",
      ],
      engines: { number: 1, type: "merlin", version: "1C" },
      mass: { kg: 569234 },
      company: "SpaceX",
      boosters: 0,
      stages: 2,
      first_flight: "2006-03-24",
      country: "Republic of Marshall Islands",
      cost_per_launch: 6700000,
      success_rate_pct: 40,
    },
    {
      rocket_id: "Falcon9",
      rocket_name: "Falcon 9",
      rocket_type: "rocket",
      description: "rocket 9 description",
      active: true,
      flickr_images: [
        "https://imgur.com/DaCfMsj.jpg",
        "https://imgur.com/azYafd8.jpg",
      ],
      engines: { number: 9, type: "merlin", version: "1" },
      mass: { kg: 549054 },
      company: "SpaceX",
      boosters: 0,
      stages: 2,
      first_flight: "2010-06-04",
      country: "United States",
      cost_per_launch: 50000000,
      success_rate_pct: 97,
    },
  ],
};

const mockeduseRocketItemsQuery = useRocketItemsQuery as jest.Mock;
const mockeduseParams = useParams as jest.Mock;

// TEST: 1

test("Testing Rocket item details page when the data is successfully loaded from the server and is stored locally", () => {
  const savedData = JSON.stringify(rockets);

  mockeduseRocketItemsQuery.mockReturnValue({
    loading: false,
    error: false,
    data: rockets,
  });

  mockeduseParams.mockReturnValue({
    id: "Falcon1",
  });

  Storage.prototype.setItem = jest.fn((Rockets, savedData) => null);
  Storage.prototype.getItem = jest.fn((Rockets) => savedData);

  const renderObj = render(<RocketItemDetailsContainer />);

  const rows = renderObj.getAllByRole("row");
  const row1 = renderObj.getByRole("row", { name: /Specifications Details/i });
  const row2 = renderObj.getByRole("row", { name: /ROCKET ID Falcon1/i });
  const row3 = renderObj.getByRole("row", { name: /ROCKET TYPE rocket/i });
  const row4 = renderObj.getByRole("row", { name: /ACTIVE No/i });
  const row5 = renderObj.getByRole("row", { name: /MASS 569234Kg/i });
  const row6 = renderObj.getByRole("row", {
    name: /ENGINES Number: 1, Type: merlin, Version: 1C/i,
  });
  const row7 = renderObj.getByRole("row", { name: /COMPANY SpaceX/i });
  const row8 = renderObj.getByRole("row", { name: /BOOSTERS 0/i });
  const row9 = renderObj.getByRole("row", { name: /STAGES 2/i });
  const row10 = renderObj.getByRole("row", {
    name: /FIRST FLIGHT 2006-03-24/i,
  });
  const row11 = renderObj.getByRole("row", {
    name: /COUNTRY Republic of Marshall Islands/i,
  });
  const row12 = renderObj.getByRole("row", {
    name: /COST PER LAUNCH 6700000/i,
  });
  const row13 = renderObj.getByRole("row", { name: /SUCCESS RATE 40%/i });
  const description = renderObj.getByText("rocket 1 description");
  const heading = renderObj.getByRole("heading", { name: /Falcon 1/i });
  const images = renderObj.getAllByTestId("imgs");
  const loading = renderObj.queryByText("Loading...");
  const error = renderObj.queryByText("error");

  expect(rows).toHaveLength(13);
  expect(row1).toBeInTheDocument();
  expect(row2).toBeInTheDocument();
  expect(row3).toBeInTheDocument();
  expect(row4).toBeInTheDocument();
  expect(row5).toBeInTheDocument();
  expect(row6).toBeInTheDocument();
  expect(row7).toBeInTheDocument();
  expect(row8).toBeInTheDocument();
  expect(row9).toBeInTheDocument();
  expect(row10).toBeInTheDocument();
  expect(row11).toBeInTheDocument();
  expect(row12).toBeInTheDocument();
  expect(row13).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", "https://imgur.com/DaCsadafMsj.jpg");
  expect(images[1]).toHaveAttribute("src", "https://imgur.com/azYafd8.jpg");
  expect(loading).toBeNull();
  expect(error).toBeNull();

  act(() => {
    fireEvent(images[0], new Event("error"));
    expect(images[0]).toHaveAttribute("src", "no_image_available.jpg");
  });
});


// TEST: 2

test("Testing Rocket item details page when the data is not stored locally from the server", () => {
  const savedData = JSON.stringify(rockets);

  mockeduseRocketItemsQuery.mockReturnValue({
    loading: false,
    error: false,
    data: rockets,
  });

  mockeduseParams.mockReturnValue({
    id: "Falcon1",
  });

  Storage.prototype.setItem = jest.fn((Rockets, savedData) => null);
  Storage.prototype.getItem = jest.fn((Rockets) => null);

  const renderObj = render(<RocketItemDetailsContainer />);

  const rows = renderObj.getAllByRole("row");
  const row1 = renderObj.getByRole("row", { name: /Specifications Details/i });
  const row2 = renderObj.getByRole("row", { name: /ROCKET ID Falcon1/i });
  const row3 = renderObj.getByRole("row", { name: /ROCKET TYPE rocket/i });
  const row4 = renderObj.getByRole("row", { name: /ACTIVE No/i });
  const row5 = renderObj.getByRole("row", { name: /MASS 569234Kg/i });
  const row6 = renderObj.getByRole("row", {
    name: /ENGINES Number: 1, Type: merlin, Version: 1C/i,
  });
  const row7 = renderObj.getByRole("row", { name: /COMPANY SpaceX/i });
  const row8 = renderObj.getByRole("row", { name: /BOOSTERS 0/i });
  const row9 = renderObj.getByRole("row", { name: /STAGES 2/i });
  const row10 = renderObj.getByRole("row", {
    name: /FIRST FLIGHT 2006-03-24/i,
  });
  const row11 = renderObj.getByRole("row", {
    name: /COUNTRY Republic of Marshall Islands/i,
  });
  const row12 = renderObj.getByRole("row", {
    name: /COST PER LAUNCH 6700000/i,
  });
  const row13 = renderObj.getByRole("row", { name: /SUCCESS RATE 40/i });
  const description = renderObj.getByText("rocket 1 description");
  const heading = renderObj.getByRole("heading", { name: /Falcon 1/i });
  const images = renderObj.getAllByTestId("imgs");
  const loading = renderObj.queryByText("Loading...");
  const error = renderObj.queryByText("error");

  expect(rows).toHaveLength(13);
  expect(row1).toBeInTheDocument();
  expect(row2).toBeInTheDocument();
  expect(row3).toBeInTheDocument();
  expect(row4).toBeInTheDocument();
  expect(row5).toBeInTheDocument();
  expect(row6).toBeInTheDocument();
  expect(row7).toBeInTheDocument();
  expect(row8).toBeInTheDocument();
  expect(row9).toBeInTheDocument();
  expect(row10).toBeInTheDocument();
  expect(row11).toBeInTheDocument();
  expect(row12).toBeInTheDocument();
  expect(row13).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", "https://imgur.com/DaCsadafMsj.jpg");
  expect(images[1]).toHaveAttribute("src", "https://imgur.com/azYafd8.jpg");
  expect(loading).toBeNull();
  expect(error).toBeNull();

  act(() => {
    fireEvent(images[0], new Event("error"));
    expect(images[0]).toHaveAttribute("src", "no_image_available.jpg");
  });
});


// TEST: 3

test("Testing Rocket item details page when the data is not locally stored and the data from server is still loading", () => {
    mockeduseRocketItemsQuery.mockReturnValue({
        loading: true,
        error: false,
        data: null || undefined,
      });
    
      mockeduseParams.mockReturnValue({
        id: "Falcon1",
      });
    
      Storage.prototype.getItem = jest.fn((Rockets) => null);

      const renderObj = render(<RocketItemDetailsContainer />);

      const loading = renderObj.getByText("Loading...");
      const error = renderObj.queryByText("ERROR");
      const RocketData = renderObj.queryByText("rocketCard");

      expect(loading).toBeInTheDocument();
      expect(error).toBeNull();
      expect(RocketData).toBeNull();
});

// TEST: 4

test("Testing Rocket item details page when the data is not loading and there is error", () => {
    mockeduseRocketItemsQuery.mockReturnValue({
        loading: false,
        error: true,
        data: null || undefined,
      });
    
      mockeduseParams.mockReturnValue({
        id: "Falcon1",
      });
    
      Storage.prototype.getItem = jest.fn((Rockets) => null);

      const renderObj = render(<RocketItemDetailsContainer />);

      const loading = renderObj.queryByText("Loading...");
      const error = renderObj.getByText("Error");
      const RocketData = renderObj.queryByText("rocketCard");

      expect(loading).toBeNull();
      expect(error).toBeInTheDocument();
      expect(RocketData).toBeNull();
});
