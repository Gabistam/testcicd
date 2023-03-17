import Home from "./Home";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("renders Home component", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
}

)