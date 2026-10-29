const { describe, it } = require("node:test");
const assert = require("node:assert");
const { handEvaluation } = require("./exam");

describe("handEvaluation", () => {
    it("should return 30 for a Brelan of 2", () => {
        assert.strictEqual(
            handEvaluation([[
                [2, "Coeur"],
                [2, "Carreau"],
                [2, "Trèfle"],
                [4, "Pique"],
                [5, "Coeur"],
            ]]),
            30
        );
    });

    it("should return 60 for a Carré of 2", () => {
        assert.strictEqual(
            handEvaluation([[
                [2, "Coeur"],
                [2, "Carreau"],
                [2, "Trèfle"],
                [2, "Pique"],
                [5, "Coeur"],
            ]]),
            60
        );
    });

    it("should return 90 for a Carré of 2 and a Brelan of 2 for two different hands", () => {
        assert.strictEqual(
            handEvaluation([
                [
                    [2, "Coeur"],
                    [2, "Carreau"],
                    [2, "Trèfle"],
                    [2, "Pique"],
                    [5, "Coeur"],
                ],
                [
                    [2, "Coeur"],
                    [2, "Carreau"],
                    [2, "Trèfle"],
                    [4, "Pique"],
                    [5, "Coeur"],
                ]
            ]),
            90
        );
    });
});
