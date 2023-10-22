export {};

const unique = (items: string[]) => [...new Set(items)];
const removeDots = (s: string) => s.replace(/\./g, "");

const makeCommon = (email: string) => {
  let [local, domain] = email.split("@");
  if (local.includes("+")) local = local.substring(0, local.indexOf("+"));

  return `${removeDots(local)}@${domain}`;
};

const numUniqueEmails = (emails: string[]) => unique(emails.map(makeCommon)).length;

describe("num unique emails", () => {
  it("case 1", () => {
    expect(
      numUniqueEmails([
        "test.email+alex@leetcode.com",
        "test.e.mail+bob.cathy@leetcode.com",
        "testemail+david@lee.tcode.com",
      ]),
    ).toEqual(2);
  });

  it("case 2", () => {
    expect(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])).toEqual(3);
  });
});