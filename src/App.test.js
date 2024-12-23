import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component Tests suit", () => {

  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByTestId("learn-link");
    expect(linkElement).toBeInTheDocument();
  });

  it("Should href equals to http://localhost/amirdharhi.com", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement.href).toBe("http://localhost/amirdharhi.com");
  });

  it("Should innerText equals to learn react", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement.textContent).toBe("learn react");
  });

})