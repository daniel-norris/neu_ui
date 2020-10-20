import React from "react";
import { act } from "react-dom/test-utils";
import ReactDom from "react-dom";

import { TextArea } from "./TextArea";

let container = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});

it("render textarea and update", () => {
	act(() => {
		ReactDom.render(
			<TextArea
				placeholder='test'
				id='test'
				name='test'
				cols={5}
				row={5}
			/>,
			container
		);
	});
	const textarea = document.getElementById("test");
	act(() => {
		textarea.value = "test value";
	});
	expect(textarea.value).toBe("test value");
});
