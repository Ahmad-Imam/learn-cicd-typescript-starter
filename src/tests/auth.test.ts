import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
    test("returns null when authorization header is missing", () => {
        const headers = {};

        expect(getAPIKey(headers)).toBeNull();
    });

    test("returns null when scheme is not ApiKey", () => {
        const headers = { authorization: "Bearer abc123" };

        expect(getAPIKey(headers)).toBeNull();
    });

    test("returns null when ApiKey value is missing", () => {
        const headers = { authorization: "ApiKey" };

        expect(getAPIKey(headers)).toBeNull();
    });

    test("returns ApiKey value when header is valid", () => {
        const headers = { authorization: "ApiKey abc123" };

        expect(getAPIKey(headers)).toBe("abc123");
    });
});
