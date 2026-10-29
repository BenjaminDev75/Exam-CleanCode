const { describe, it } = require("node:test");
const assert = require("node:assert");
const { handEvaluation } = require("./exam");

describe("handEvaluation", () => {
    it("should return 30 for a Brelan", () => {
        assert.strictEqual(
            handEvaluation([
                [2, "Coeur"],
                [2, "Carreau"],
                [2, "Trèfle"],
                [4, "Pique"],
                [5, "Coeur"],
            ]),
            30
        );
    });
})