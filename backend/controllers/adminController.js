export const login = (req, res) => {
  const { password } = req.body;

  if (password === process.env.ADMIN_TOKEN) {
    res.cookie("admin_token", "true", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res.json({ success: true, message: "Access granted 🔓" });
  }
  return res
    .status(401)
    .json({ success: false, message: "Invalid token. Access denied 🕵🏻‍♂️" });
};

export const verifyAdmin = (req, res, next) => {
  if (req.cookies.admin_token === "true") {
    return next();
  }
  return res
  .status(401)
  .json({ error: "Unauthorized 🕵🏻‍♂️" });
};
