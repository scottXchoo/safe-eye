import { createSupabaseServerClient } from "@/utils/supabase/server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const serverClient = createSupabaseServerClient();
  const {
    data: { session },
    // Sign In 하면, 세션이 생성된다. 세션이 있다는 것은 Sign In이 되었다는 것이다.
  } = await serverClient.auth.getSession();

  if (session) {
    await serverClient.auth.signOut(); // coockies에 저장된 세션을 지운다.
  } else {
    console.log("No session found. Sign In first.");
  }
  return NextResponse.redirect(new URL("/", req.url), {
    status: 302, // Not 301. Temporary moved.
  });
}
