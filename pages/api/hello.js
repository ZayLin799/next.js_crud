// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "@/services/db";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
