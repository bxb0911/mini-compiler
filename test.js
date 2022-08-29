const a = {
  type: "Program",
  body: [
    {
      type: "ExpressionStatement",
      expression: {
        type: "JSXElement",
        openingElement: {
          type: "JSXOpeningElement",
          name: { type: "JSXIdentifier", name: "h1" },
          selfClosing: false,
          attributes: [
            {
              type: "JSXAttribute",
              name: { type: "JSXIdentifier", name: "id" },
              value: { type: "Literal", value: "title", raw: '"title"' },
            },
          ],
        },
        children: [
          { type: "JSXText", value: "\n    ", raw: "\n    " },
          {
            type: "JSXElement",
            openingElement: {
              type: "JSXOpeningElement",
              name: { type: "JSXIdentifier", name: "span" },
              selfClosing: false,
              attributes: [],
            },
            children: [{ type: "JSXText", value: "hello", raw: "hello" }],
            closingElement: {
              type: "JSXClosingElement",
              name: { type: "JSXIdentifier", name: "span" },
            },
          },
          { type: "JSXText", value: "world\n  ", raw: "world\n  " },
        ],
        closingElement: {
          type: "JSXClosingElement",
          name: { type: "JSXIdentifier", name: "h1" },
        },
      },
    },
  ],
  sourceType: "module",
};
