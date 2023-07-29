import { School } from "../School.js";

export function generateSchools(number) {
  const suffixes = [
    "International School",
    "Montessori",
    "School Complex",
    "Elementory",
    "Preparatory School",
    "Academy",
    "Basic Schools",
  ];
  const randSuffixIndex = () => Math.floor(Math.random() * suffixes.length);
  for (let i = 0; i < number; i++) {
    School.create({
      name: `${faker.company.name()} ${suffixes[randSuffixIndex()]}`,
    });
  }
}
