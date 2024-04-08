import { NextResponse } from "next/server";
import { EmailOtpType } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "@/utils/supabase/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType;
  const next = searchParams.get("next");
  const serverClient = createSupabaseServerClient();

  if (token_hash && type && next) {
    const { error } = await serverClient.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      return NextResponse.redirect(next);
    }
  }
  return NextResponse.redirect("/error");
}
