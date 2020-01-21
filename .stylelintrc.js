module.exports = {
	extends: ["stylelint-config-standard","stylelint-config-prettier"],
	plugins: ["stylelint-order"],
	rules: {
		"indentation": 4,
		"rule-empty-line-before": "always",
		"at-rule-empty-line-before": "always",
		"at-rule-name-case": "lower",
		"at-rule-name-space-after": "always",
		"at-rule-no-unknown": true,
		"at-rule-semicolon-newline-after": "always",
		"block-closing-brace-newline-after": "always",
		"block-closing-brace-newline-before": "always",
		"block-closing-brace-empty-line-before": "never",
		"block-no-empty": true,
		"block-opening-brace-newline-after": "always",
		"block-opening-brace-space-before": "always",
		"color-named": "never",
		"color-no-invalid-hex": true,
		"declaration-block-no-duplicate-properties": true,
		"declaration-colon-space-after": "always",
		"declaration-colon-space-before": "never",
		"declaration-block-semicolon-newline-after": "always",
		"selector-list-comma-newline-after": "always",
		"selector-list-comma-space-before": "never",

		"order/order": [
			"declarations",
			{
				"type": "at-rule",
				"name": "media",
			},
			{
				"type": "rule",
				"selector": "\\w:\\w"
			},
			{
				"type": "rule",
				"selector": "^\\w_"
			},
		],
		"order/properties-order": [
			[
				"display",
				"position",
				"top",
				"right",
				"bottom",
				"left",
			],
			{
				unspecified: "bottom",
			}
		],
	},
};