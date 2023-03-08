import db from "@/services/db";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const article = await new Promise((resolve, reject) => {
          db.query(`SELECT * FROM articles`, (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        });

        res.status(200).json(article);
      } catch (error) {
        res.status(500).json({ message: "Error retrieving articles" });
      }

      break;

    case "POST":
      try {
        const { title, description } = req.body;

        await new Promise((resolve, reject) => {
          db.query(
            "INSERT INTO articles (title, description) VALUES (?, ?)",
            [title, description],
            (error, results) => {
              if (error) {
                console.log("err", error);
                reject(error);
              } else {
                resolve(results);
              }
            }
          );
        });

        res.status(200).json({ message: "Article added successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error adding article" });
      }

      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}
