import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

 console.log("SUPABASE URL:", process.env.SUPABASE_URL);
 console.log("SUPABASE SERVICE ROLE KEY:", process.env.SUPABASE_SERVICE_ROLE_KEY);

export default supabase;