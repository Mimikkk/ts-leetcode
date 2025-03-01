import { exercises } from "@shared/utilities/exercise.ts";

const subdomainVisits = (cpdomains: string[]): string[] => {
  const map = new Map<string, number>();

  for (const cpdomain of cpdomains) {
    const [count, domain] = cpdomain.split(" ");
    const domains = domain.split(".");

    for (let i = 0; i < domains.length; i++) {
      const subdomain = domains.slice(i).join(".");

      map.set(subdomain, (map.get(subdomain) ?? 0) + +count);
    }
  }

  return [...map.entries()].map(([domain, count]) => `${count} ${domain}`);
};

exercises(
  [subdomainVisits],
  [
    [[["9001 discuss.leetcode.com"]], ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]],
    [
      [["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]],
      ["901 mail.com", "50 yahoo.com", "900 google.mail.com", "5 wiki.org", "5 org", "1 intel.mail.com", "951 com"],
    ],
  ],
);
