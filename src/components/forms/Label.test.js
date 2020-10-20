import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { Label } from "./Label";

describe("Label test suite", () => {
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

	it("renders Label children props", () => {
		act(() => {
			render(<Label>Label Text</Label>, container);
		});

		expect(container.textContent).toBe("Label Text");
	});
});
