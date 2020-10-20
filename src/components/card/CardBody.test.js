import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { CardBody } from "./CardBody";

describe("CardBody test suite", () => {
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

	it("renders CardBody children props", () => {
		const children = "I'm a Child to be rendered in the CardBody";
		act(() => {
			render(<CardBody>{children}</CardBody>, container);
		});

		expect(container.textContent).toBe(children);
	});
});
