export const login = (req, res) => {
  const { password } = req.body;

  if (password === process.env.ADMIN_TOKEN) {
    // res.cookie("admin_token", "true", {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "none",
    //   maxAge: 24 * 60 * 60 * 1000, 
    // });
    return res.json({ success: true, token: process.env.ADMIN_TOKEN, message: "Access granted 🔓" });
  }
  return res
    .status(401)
    .json({ success: false, message: "Invalid token. Access denied 🕵🏻‍♂️" });
    // TEMPORAL DIAGNISTIC LOGS - REMOVE IN PRODUCTION
    console.log("TOKEN RECIBIDO:", JSON.stringify(password));
    console.log("TOKEN ESPERADO:", JSON.stringify(process.env.ADMIN_TOKEN));
    console.log("SON IGUALES:", password === process.env.ADMIN_TOKEN);
};

export const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token === process.env.ADMIN_TOKEN) {
    return next();
  }

  // if (req.cookies.admin_token === "true") {
  //   return next();
  // }
  return res
  .status(401)
  .json({ error: "Unauthorized 🕵🏻‍♂️" });
};
