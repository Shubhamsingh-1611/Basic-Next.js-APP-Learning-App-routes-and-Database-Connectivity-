import connectDB from "@/lib/db";
import User from "@/models/User";

// creating users
export async function POST(req) {
  try {
    await connectDB();
    console.log("working")
    const body = await req.json();
    const user = await User.create(body);

    return Response.json({ success: true, data: user });
  } catch (error) {
     console.error("POST ERROR:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// getting user and search user
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    let query = {};
    if (email) {
      query.email = { $regex: email, $options: "i" };
    }

    const users = await User.find(query);

    return Response.json({ success: true, data: users });
  } catch (error) {
    console.error("GET ERROR:", error);

    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}