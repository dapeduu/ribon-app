import { screen } from "@testing-library/react-native";
import { renderComponent } from "config/testUtils/renders";
import TicketsSection from ".";

describe("TicketsSection", () => {
  beforeEach(async () => {
    renderComponent(<TicketsSection />);
  });

  it("renders without error", () => {
    expect(screen.getByText("Daily Ticket (Free)")).toBeDefined();
    expect(screen.getByText("Earn 1 per day")).toBeDefined();
  });
});
