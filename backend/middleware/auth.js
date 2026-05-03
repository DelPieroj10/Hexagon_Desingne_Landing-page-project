const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

export const verifyAdminToken = (req, res, next) => {
  const token = req.headers.authorization;

  console.log("HEADER TOKEN:", token);
  console.log("EXPECTED TOKEN:", ADMIN_TOKEN);

  console.log("ENV ADMIN TOKEN:", process.env.ADMIN_TOKEN);

  if (!token || token !== `Bearer ${ADMIN_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized 🕵🏻‍♂️" });
  }

  next();
};
