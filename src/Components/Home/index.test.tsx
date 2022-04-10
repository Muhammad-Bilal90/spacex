import "@testing-library/jest-dom";
import * as React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import { useCompanyInfoQuery, CompanyInfoQuery } from "../../generated/graphql";
import HomeContainer from ".";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../generated/graphql.tsx");

const companyInfo: CompanyInfoQuery = {
  info: {
    name: "SpaceX",
    founded: 2002,
    founder: "Elon Musk",
    ceo: "Elon Musk",
    coo: "Gwynne Shotwell",
    cto_propulsion: "Tom Mueller",
    employees: 7000,
    valuation: 27500000000,
    summary:
      "Description",
  },
};

const mockeduseRocketItemsQuery = useCompanyInfoQuery as jest.Mock;

// TEST: 1

test("Testing Home page when there is no data locally stored", () => {
  mockeduseRocketItemsQuery.mockReturnValue({
    loading: false,
    error: false,
    data: companyInfo,
  });

  const savedData = JSON.stringify(companyInfo);

  Storage.prototype.getItem = jest.fn((companyInfo) => null);

  const renderObj = render(
    <Router>
      <HomeContainer />
    </Router>
  );

  const info = renderObj.getByTitle("companyInfo");
  const companyName = renderObj.getByRole("heading", { name: /SpaceX/i});
  const summary = renderObj.getByText("Description");
  const images = renderObj.getAllByRole("img");
  const ceo = renderObj.getByRole("heading", { name: /Elon Musk/i});
  const ceoDes = renderObj.getByText("Founder, CEO, CTO");
//   const img2 = renderObj.getAllByRole("img");
  const coo = renderObj.getByRole("heading", { name: /Gwynne Shotwell/i});
  const cooDes = renderObj.getByText("COO");
//   const img3 = renderObj.getByRole("img");
  const cto = renderObj.getByRole("heading", { name: /Tom Mueller/i});
  const ctoDes = renderObj.getByText("CTO Propulsion");
  const loading = renderObj.queryByText("Loading");
  const error = renderObj.queryByText("Error");

  expect(info).toBeInTheDocument();
  expect(companyName).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(ceo).toBeInTheDocument();
  expect(ceoDes).toBeInTheDocument();
  expect(coo).toBeInTheDocument();
  expect(cooDes).toBeInTheDocument();
  expect(cto).toBeInTheDocument();
  expect(ctoDes).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", "ElonMusk.jpg");
  expect(images[1]).toHaveAttribute("src", "GwynneShotwell.jpg");
  expect(images[2]).toHaveAttribute("src", "TomMuller.jpg");
  expect(loading).toBeNull();
  expect(error).toBeNull();
});

// TEST: 2

test("Testing Home page when there is data locally stored", () => {
  mockeduseRocketItemsQuery.mockReturnValue({
    loading: false,
    error: false,
    data: companyInfo,
  });

  const savedData = JSON.stringify(companyInfo);

  Storage.prototype.setItem = jest.fn((CompanyInfo, savedData) => null);
  Storage.prototype.getItem = jest.fn((CompanyInfo) => savedData);

  const renderObj = render(
    <Router>
      <HomeContainer />
    </Router>
  );

  const info = renderObj.getByTitle("companyInfo");
  const companyName = renderObj.getByRole("heading", { name: /SpaceX/i});
  const summary = renderObj.getByText("Description");
  const images = renderObj.getAllByRole("img");
  const ceo = renderObj.getByRole("heading", { name: /Elon Musk/i});
  const ceoDes = renderObj.getByText("Founder, CEO, CTO");
//   const img2 = renderObj.getByRole("img");
  const coo = renderObj.getByRole("heading", { name: /Gwynne Shotwell/i});
  const cooDes = renderObj.getByText("COO");
//   const img3 = renderObj.getByRole("img");
  const cto = renderObj.getByRole("heading", { name: /Tom Mueller/i});
  const ctoDes = renderObj.getByText("CTO Propulsion");
  const loading = renderObj.queryByText("Loading");
  const error = renderObj.queryByText("Error");

  expect(info).toBeInTheDocument();
  expect(companyName).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(ceo).toBeInTheDocument();
  expect(ceoDes).toBeInTheDocument();
  expect(coo).toBeInTheDocument();
  expect(cooDes).toBeInTheDocument();
  expect(cto).toBeInTheDocument();
  expect(ctoDes).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", "ElonMusk.jpg");
  expect(images[1]).toHaveAttribute("src", "GwynneShotwell.jpg");
  expect(images[2]).toHaveAttribute("src", "TomMuller.jpg");
  expect(loading).toBeNull();
  expect(error).toBeNull();
});

// TEST: 3

test("Testing Home page when there is data locally stored is now old and needs to update new data from the server", () => {
  const cachedData: CompanyInfoQuery = {
    info: {
      name: "SpaceX1",
      founded: 20021,
      founder: "Elon Musk1",
      ceo: "Elon Musk1",
      coo: "Gwynne Shotwell1",
      cto_propulsion: "Tom Mueller1",
      employees: 70001,
      valuation: 275000000001,
      summary:
        "Description 1",
    },
  };
  mockeduseRocketItemsQuery.mockReturnValue({
    loading: false,
    error: false,
    data: companyInfo,
  });

  const oldCachedData = JSON.stringify(cachedData);
  const newCachedData = JSON.stringify(companyInfo);

  Storage.prototype.getItem = jest.fn((CompanyInfo) => oldCachedData);
  Storage.prototype.setItem = jest.fn((CompanyInfo, newCachedData) => null);

  const renderObj = render(
    <Router>
      <HomeContainer />
    </Router>
  );

  const info = renderObj.getByTitle("companyInfo");
  const companyName = renderObj.getByRole("heading", { name: /SpaceX/i});
  const summary = renderObj.getByText("Description");
  const images = renderObj.getAllByRole("img");
  const ceo = renderObj.getByRole("heading", { name: /Elon Musk/i});
  const ceoDes = renderObj.getByText("Founder, CEO, CTO");
//   const img2 = renderObj.getByRole("img");
  const coo = renderObj.getByRole("heading", { name: /Gwynne Shotwell/i});
  const cooDes = renderObj.getByText("COO");
//   const img3 = renderObj.getByRole("img");
  const cto = renderObj.getByRole("heading", { name: /Tom Mueller/i});
  const ctoDes = renderObj.getByText("CTO Propulsion");
  const loading = renderObj.queryByText("Loading");
  const error = renderObj.queryByText("Error");

  expect(info).toBeInTheDocument();
  expect(companyName).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(ceo).toBeInTheDocument();
  expect(ceoDes).toBeInTheDocument();
  expect(coo).toBeInTheDocument();
  expect(cooDes).toBeInTheDocument();
  expect(cto).toBeInTheDocument();
  expect(ctoDes).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", "ElonMusk.jpg");
  expect(images[1]).toHaveAttribute("src", "GwynneShotwell.jpg");
  expect(images[2]).toHaveAttribute("src", "TomMuller.jpg");
  expect(loading).toBeNull();
  expect(error).toBeNull();
});

// TEST: 4

test("Testing Home page when there is no data locally stored and page is waiting to load new data from the server", () => {
  mockeduseRocketItemsQuery.mockReturnValue({
    loading: true,
    error: false,
    data: null || undefined,
  });

  const savedData = null;

  Storage.prototype.setItem = jest.fn((CompanyInfo, savedData) => null);
  Storage.prototype.getItem = jest.fn((CompanyInfo) => null);

  const renderObj = render(
    <Router>
      <HomeContainer />
    </Router>
  );

  const loading = renderObj.getByText("Loading...");
  const error = renderObj.queryByText("ERROR");
  const rocketData = renderObj.queryByText("companyInfo");

  expect(loading).toBeInTheDocument();
  expect(error).toBeNull();
  expect(rocketData).toBeNull();
});

// TEST: 5

test("Testing Home page when there is no data locally stored and page is waiting to load new data from the server", () => {
  mockeduseRocketItemsQuery.mockReturnValue({
    loading: false,
    error: true,
    data: null || undefined,
  });

  const savedData = null;

  Storage.prototype.setItem = jest.fn((CompanyInfo, savedData) => null);
  Storage.prototype.getItem = jest.fn((CompanyInfo) => null);

  const renderObj = render(
    <Router>
      <HomeContainer />
    </Router>
  );

  const loading = renderObj.queryByText("Loading...");
  const error = renderObj.getByText("Error");
  const rocketData = renderObj.queryByText("companyInfo");

  expect(loading).toBeNull();
  expect(error).toBeInTheDocument();
  expect(rocketData).toBeNull();
});
