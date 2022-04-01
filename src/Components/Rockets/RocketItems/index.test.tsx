import '@testing-library/jest-dom'
import * as React from 'react'
import { render, act, fireEvent } from "@testing-library/react";
import {
  useRocketItemsQuery,
  RocketItemsQuery,
} from "../../../generated/graphql";
import RocketItemsContainer from ".";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../../generated/graphql.tsx");

const rockets: RocketItemsQuery = {
  rockets: [
    {
      rocket_id: "Falcon1",
      rocket_name: "Falcon 1",
      rocket_type: "rocket",
      description: "rocket 1 description",
      active: true,
      flickr_images: [
        "https://imgur.com/DaCsadafMsj.jpg",
        "https://imgur.com/azYafd8.jpg",
      ],
      engines: { number: 2, type: "merlin", version: "5" },
      mass: { kg: 569234 },
      company: "SpaceX",
      boosters: 0,
      stages: 3,
      first_flight: "2001-03-02",
      country: "Pakistan",
      cost_per_launch: 80000000,
      success_rate_pct: 99,
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

// TEST: 1

test("Testing Rocket item page when there is no data locally stored", () => {
  mockeduseRocketItemsQuery.mockReturnValue({
    loading: false,
    error: false,
    data: rockets,
  });

  const savedData = JSON.stringify(rockets);

  Storage.prototype.getItem = jest.fn((Rockets) => null);

  const renderObj = render(
    <Router>
      <RocketItemsContainer />
    </Router>
  );

  const items = renderObj.getAllByTitle("rocketCards");
  const name1 = renderObj.getByText("Falcon 1");
  const name2 = renderObj.getByText("Falcon 9");
  const description1 = renderObj.getByText("rocket 1 description");
  const description2 = renderObj.getByText("rocket 9 description");
  const images = renderObj.getAllByRole("img");
  const heading = renderObj.getByRole("heading", {
    name: /Rockets Launched by SpaceX/i,
  });
  const loading = renderObj.queryByText("Loading...");
  const error = renderObj.queryByText("ERROR");

  expect(items).toHaveLength(2);
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(description1).toBeInTheDocument();
  expect(description2).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", "https://imgur.com/DaCsadafMsj.jpg");
  expect(images[1]).toHaveAttribute("src", "https://imgur.com/DaCfMsj.jpg");
  expect(loading).toBeNull();
  expect(error).toBeNull();

  act(() => {
    fireEvent(images[0], new Event("error"));
    expect(images[0]).toHaveAttribute("src", "no_image_available.jpg");
  });

  act(() => {
    fireEvent(images[1], new Event("error"));
    expect(images[1]).toHaveAttribute("src", "no_image_available.jpg");
  });

  // Testing Read More Button

  const linkItem = renderObj.getAllByRole("link");
  expect(linkItem[0]).toHaveAttribute("href", "/rocketItems/Falcon1");
  expect(linkItem[1]).toHaveAttribute("href", "/rocketItems/Falcon9");

  act(() => {
    fireEvent.click(linkItem[0]);
    expect(location.pathname).toBe("/rocketItems/Falcon1");
  });

  act(() => {
    fireEvent.click(linkItem[1]);
    expect(location.pathname).toBe("/rocketItems/Falcon9");
  });
});

// TEST: 2

test("Testing Rocket item page when there is data locally stored", () => {
  mockeduseRocketItemsQuery.mockReturnValue({
    loading: false,
    error: false,
    data: rockets,
  });

  const savedData = JSON.stringify(rockets);

  Storage.prototype.setItem = jest.fn((Rockets, savedData) => null);
  Storage.prototype.getItem = jest.fn((Rockets) => savedData);

  const renderObj = render(
    <Router>
      <RocketItemsContainer />
    </Router>
  );

  const items = renderObj.getAllByTitle("rocketCards");
  const name1 = renderObj.getByText("Falcon 1");
  const name2 = renderObj.getByText("Falcon 9");
  const description1 = renderObj.getByText("rocket 1 description");
  const description2 = renderObj.getByText("rocket 9 description");
  const images = renderObj.getAllByRole("img");
  const heading = renderObj.getByRole("heading", {
    name: /Rockets Launched by SpaceX/i,
  });
  const loading = renderObj.queryByText("Loading...");
  const error = renderObj.queryByText("ERROR");

  expect(items).toHaveLength(2);
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(description1).toBeInTheDocument();
  expect(description2).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", "https://imgur.com/DaCsadafMsj.jpg");
  expect(images[1]).toHaveAttribute("src", "https://imgur.com/DaCfMsj.jpg");
  expect(loading).toBeNull();
  expect(error).toBeNull();

  act(() => {
    fireEvent(images[0], new Event("error"));
    expect(images[0]).toHaveAttribute("src", "no_image_available.jpg");
  });

  act(() => {
    fireEvent(images[1], new Event("error"));
    expect(images[1]).toHaveAttribute("src", "no_image_available.jpg");
  });

  // Testing Read More Button

  const linkItem = renderObj.getAllByRole("link");
  expect(linkItem[0]).toHaveAttribute("href", "/rocketItems/Falcon1");
  expect(linkItem[1]).toHaveAttribute("href", "/rocketItems/Falcon9");

  act(() => {
    fireEvent.click(linkItem[0]);
    expect(location.pathname).toBe("/rocketItems/Falcon1");
  });

  act(() => {
    fireEvent.click(linkItem[1]);
    expect(location.pathname).toBe("/rocketItems/Falcon9");
  });
});

// TEST: 3

test("Testing Rocket item page when there is data locally stored is now old and needs to update new data from the server", () => {
  const cachedData: RocketItemsQuery = {
    rockets: [
      {
        rocket_id: "Falcon0",
        rocket_name: "Falcon 0",
        rocket_type: "rocket",
        description: "rocket 3 description",
        active: true,
        flickr_images: [
          "https://imgur.com/DaCfMsj.jpg",
          "https://imgur.com/azYafd8.jpg",
        ],
        engines: { number: 1, type: "merlin", version: "19" },
        mass: { kg: 54219054 },
        company: "SpaceX",
        boosters: 0,
        stages: 5,
        first_flight: "2010-01-04",
        country: "New Zealand",
        cost_per_launch: 500140000,
        success_rate_pct: 90,
      },
      {
        rocket_id: "Falcon15",
        rocket_name: "Falcon 15",
        rocket_type: "rocket",
        description: "rocket 4 description",
        active: true,
        flickr_images: [
          "https://imgur.com/DaCfMsj.jpg",
          "https://imgur.com/azYafd8.jpg",
        ],
        engines: { number: 6, type: "merlin", version: "15" },
        mass: { kg: 5691234 },
        company: "SpaceX",
        boosters: 0,
        stages: 1,
        first_flight: "2011-03-02",
        country: "India",
        cost_per_launch: 85000000,
        success_rate_pct: 91,
      },
    ],
  };
  mockeduseRocketItemsQuery.mockReturnValue({
    loading: false,
    error: false,
    data: rockets,
  });

  const oldCachedData = JSON.stringify(cachedData);
  const newCachedData = JSON.stringify(rockets);

  Storage.prototype.getItem = jest.fn((Rockets) => oldCachedData);
  Storage.prototype.setItem = jest.fn((Rockets, newCachedData) => null);

  const renderObj = render(
    <Router>
      <RocketItemsContainer />
    </Router>
  );

  const items = renderObj.getAllByTitle("rocketCards");
  const name1 = renderObj.getByText("Falcon 1");
  const name2 = renderObj.getByText("Falcon 9");
  const description1 = renderObj.getByText("rocket 1 description");
  const description2 = renderObj.getByText("rocket 9 description");
  const images = renderObj.getAllByRole("img");
  const heading = renderObj.getByRole("heading", {
    name: /Rockets Launched by SpaceX/i,
  });
  const loading = renderObj.queryByText("Loading...");
  const error = renderObj.queryByText("ERROR");

  expect(items).toHaveLength(2);
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(description1).toBeInTheDocument();
  expect(description2).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", "https://imgur.com/DaCsadafMsj.jpg");
  expect(images[1]).toHaveAttribute("src", "https://imgur.com/DaCfMsj.jpg");
  expect(loading).toBeNull();
  expect(error).toBeNull();

  act(() => {
    fireEvent(images[0], new Event("error"));
    expect(images[0]).toHaveAttribute("src", "no_image_available.jpg");
  });

  act(() => {
    fireEvent(images[1], new Event("error"));
    expect(images[1]).toHaveAttribute("src", "no_image_available.jpg");
  });

  // Testing Read More Button

  const linkItem = renderObj.getAllByRole("link");
  expect(linkItem[0]).toHaveAttribute("href", "/rocketItems/Falcon1");
  expect(linkItem[1]).toHaveAttribute("href", "/rocketItems/Falcon9");

  act(() => {
    fireEvent.click(linkItem[0]);
    expect(location.pathname).toBe("/rocketItems/Falcon1");
  });

  act(() => {
    fireEvent.click(linkItem[1]);
    expect(location.pathname).toBe("/rocketItems/Falcon9");
  });
});

// TEST: 4

test("Testing Rocket item page when there is no data locally stored and page is waiting to load new data from the server", () => {
  mockeduseRocketItemsQuery.mockReturnValue({
    loading: true,
    error: false,
    data: null || undefined,
  });

  const savedData = null;

  Storage.prototype.setItem = jest.fn((Rockets, savedData) => null);
  Storage.prototype.getItem = jest.fn((Rockets) => null);

  const renderObj = render(<Router><RocketItemsContainer /></Router>);

  const loading = renderObj.getByText("Loading...");
  const error = renderObj.queryByText("ERROR");
  const rocketData = renderObj.queryByText("rocketCards");

  expect(loading).toBeInTheDocument();
  expect(error).toBeNull();
  expect(rocketData).toBeNull();
});

// TEST: 5

test("Testing Rocket item page when there is no data locally stored and page is waiting to load new data from the server", () => {
  mockeduseRocketItemsQuery.mockReturnValue({
    loading: false,
    error: true,
    data: null || undefined,
  });

  const savedData = null;

  Storage.prototype.setItem = jest.fn((Rockets, savedData) => null);
  Storage.prototype.getItem = jest.fn((Rockets) => null);

  const renderObj = render(<Router><RocketItemsContainer /></Router>);

  const loading = renderObj.queryByText("Loading...");
  const error = renderObj.getByText("Error");
  const rocketData = renderObj.queryByText("rocketCards");

  expect(loading).toBeNull();
  expect(error).toBeInTheDocument();
  expect(rocketData).toBeNull();
});