import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it('renders without crashing', function() {
  render (<Carousel />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

// it("works when you click on the left arrow", function() {
//   const { queryByTestId, queryByAltText } = render(<Carousel />);

//   const rightArrow = queryByTestId("right-arrow");
//   const leftArrow = queryByTestId("left-arrow");
//   fireEvent.click(rightArrow)
//   fireEvent.click(leftArrow)

//   expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
// });

it("arrows should be hidden", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  const leftArrow = queryByTestId("left-arrow");
  expect(queryByTestId('left-arrow')).not.toBeInTheDocument();

  

});

it(" right arrows should be hidden", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow)
  fireEvent.click(rightArrow)
  expect(queryByTestId('right-arrow')).not.toBeInTheDocument();

});