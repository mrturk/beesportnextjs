// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
export default function handler(req, res) {
  var dict = {
    one: [15, 4.5],
    two: [34, 3.3],
    three: [67, 5.0],
    four: [32, 4.1],
  };

  res.status(200).json(dict);
}
