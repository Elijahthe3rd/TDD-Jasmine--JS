/*
NB) below is imports from module uncomment it if you wish to run/use this spec

Imports below:
*/

const { passwordIsOk, passwordIsValid } = require("../src/password_checker.js");

const jsonErrors = require("../../common/errors.json");

describe("passwordIsValid() checks & tests:", () => {
  it(" should throw an Error message if give password is not larger than 8 characters. ", () => {
    expect(() => {
      passwordIsValid("aslskS1");
    }).toThrow(new Error(jsonErrors.length));
  });

  it(" should throw an Error message if given password do not exist. ", () => {
    expect(() => {
      passwordIsValid("");
    }).toThrow(new Error(jsonErrors.exists));
  });

  it(" should throw an Error message if given password doesn't contain at least one uppercase letter. ", () => {
    expect(() => {
      passwordIsValid("swagrv1*a");
    }).toThrow(new Error(jsonErrors.uppercase));
  });

  it(" should throw an Error message if given password doesn't contain at least one lowercase letter. ", () => {
    expect(() => {
      passwordIsValid("A2345678_");
    }).toThrow(new Error(jsonErrors.lowercase));
  });
  it(" should throw an Error message if given password doesn't contain at least have one digit. ", () => {
    expect(() => {
      passwordIsValid("AaBEEEEEE_");
    }).toThrow(new Error(jsonErrors.digits));
  });

  it(" should throw an Error message if given password doesn't contain at least one special character. ", () => {
    expect(() => passwordIsValid("Eli5sepuTn")).toThrow(
      new Error(jsonErrors.specialchars)
    );
  });

  describe("passwordIsOk() checks & tests:", () => {
    it("should at least meet three conditions of the given criteria.", () => {
      expect(passwordIsOk("Elijah_333")).toEqual(true);
    });

    it(" should never be OK if given password doesn't meet conditions 1 and 2. ", () => {
      expect(passwordIsOk("")).toBe(false);
    });

    it(" should never be OK if given password doesn't meet conditions 1 and 2. ", () => {
      expect(passwordIsOk("12wedfer")).toBe(false);
    });

    it(" should be OK if given password  meets conditions 1 and 2. ", () => {
      expect(passwordIsOk("eeeeeeeee")).toBe(true);
      expect(passwordIsOk("[_)-]")).toBe(false);
    });
  });
});
