import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { Slider } from "./Slider";

describe("Slider test suite", () => {
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
			render(<Slider min={0} max={100} />, container);
		});

		const slider = document.querySelector("input");
		expect(slider.type).toBe("range");
		expect(slider.min).toBe("0");
		expect(slider.max).toBe("100");

		// change value
		act(() => {
			slider.value = 67;
		});
		expect(slider.value).toBe("67");
	});
});
