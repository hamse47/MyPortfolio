// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows the developer to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// jsdom has no IntersectionObserver, which FadeInSection constructs on mount.
// Stub it so components render in tests; sections stay in their initial state.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = IntersectionObserverStub;
