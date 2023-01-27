import { rest } from "msw";
import { Breed } from "../features/dogs/dogs-api-slice";

function breedGenerator(amount: number): Breed {
  return {
    id: String(amount),
    name: "Breed " + amount,
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png",
    },
  };
}

export const handlers = [
  rest.get("https://api.thedogapi.com/v1/breeds", (req, res, ctx) => {
    const limit = Number(req.url.searchParams.get("limit")) ?? 0;
    const dogs: Breed[] = Array(limit)
      .fill(0)
      .map((_, i) => breedGenerator(i));

    return res(ctx.status(200), ctx.json(dogs));
  }),
];
