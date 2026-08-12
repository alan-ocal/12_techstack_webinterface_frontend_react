/*App renders successfully
React logo is present
Figma link is present
link opens in a new tab
link has the expected URL*/
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
  });

  it("renders the Figma link", () => {
    render(<App />);

    const link = screen.getByRole("link",
     {
      name: "Open Figma Design",
    });
    expect(link).toBeInTheDocument();
  });

  it("has the correct Figma URL", () => {
    render(<App />);
    const link = screen.getByRole("link", {
      name: "Open Figma Design",
    });

    expect(link).toHaveAttribute(
      "href",
      "https://www.figma.com/design/2DogT5wOkrM9jgT5JRdQQX/Designfile_cdp?node-id=0-1&p=f&t=zHaIwlZk3ML3eRxl-0"
    );
  });

  it("opens the Figma link in a new tab", () => {
    render(<App />);

    const link = screen.getByRole("link", {
      name: "Open Figma Design",
    });

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});