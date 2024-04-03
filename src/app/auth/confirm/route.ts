import { NextResponse } from "next/server";
import { EmailOtpType } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType;
  const next = searchParams.get("next");
  const serverClient = createClient();

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
