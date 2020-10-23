import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { Card } from "./Card";

describe("Card test suite", () => {
	let container = null;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it("renders Card children props", () => {
		const children = "I'm a Child to be rendered in the Card";
		act(() => {
			render(<Card>{children}</Card>, container);
		});

		expect(container.textContent).toBe(children);
	});
});
