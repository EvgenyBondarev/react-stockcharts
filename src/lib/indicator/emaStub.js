import { rebind, merge } from "../utils";

import baseIndicator from "./baseIndicator";

export default function() {

	const base = baseIndicator()
		.accessor(d => d.ema);

	const underlyingAlgorithm = function(data) {
    return data;
  };

	const indicator = function(data) {
		return underlyingAlgorithm(data);
	};

	rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");

	return indicator;
}
