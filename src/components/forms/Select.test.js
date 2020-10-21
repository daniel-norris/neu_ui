import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { Select } from "./Select";

describe("Select test suite", () => {
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

	it("renders Select children props", () => {
		act(() => {
			render(
				<Select options={["Option 1", "Option 2", "Option 3"]}>
					Please select an option
				</Select>,
				container
			);
		});

		const select = document.querySelector("select");
		expect(select.firstChild.textContent).toBe("Please select an option");
		expect(select.childElementCount).toBe(4);
	});
});
