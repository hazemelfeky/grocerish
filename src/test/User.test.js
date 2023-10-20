import { expect, test } from "vitest";
import { render } from "@testing-library/vue";
import AppUser from "../components/App/AppUser.vue";

test("component is rendered", () => {
  const wrapper = render(AppUser);
  expect(wrapper).toBeDefined();
});
