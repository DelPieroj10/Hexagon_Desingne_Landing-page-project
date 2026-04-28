const ADMIN_TOKEN = import.meta.env.VIT_ADMIN_TOKEN;


export const verifyAdminToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token !== ADMIN_TOKEN) {
    return res.status(401).json({ error: "Unauthorized 🕵🏻‍♂️" });
  }
  console.log("HEADER TOKEN:", token);
  console.log("EXPECTED TOKEN:", ADMIN_TOKEN);

    next();
};
