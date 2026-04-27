import connectDB from "@/lib/db";
import User from "@/models/User";


// creating users
export async function POST(req) {
  try {
    await connectDB();
    console.log("working")
    const body = await req.json();
    const user = await User.create(body);

    return Response.json({ success: true, message: "User Created Sucessfully" });
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

    // const { searchParams } = new URL(req.url);
    // const email = searchParams.get("email");

    // let query = {}; //if there is no eamil tnen 
    // if (email) {
    //   query.email = { $regex: email, $options: "i" };
    // }

    // const users = await User.find(query);

    // return Response.json({ success: true, data: users });
    const {searchParams} = new URL(req.url);
    const query = searchParams.get("q");

    if(!query) {
        const searchUser = await User.find({});
          return Response.json({ success: true, data: searchUser });
    }
    const searchUser = await User.find({$or : [{name:{ $regex:query , $options:"i"}},{email:{ $regex:query , $options:"i"}},{phone:{ $regex:query , $options:"i"}}]})
    return Response.json({ success: true, data: searchUser });
  } catch (error) {
    console.error("GET ERROR:", error);

    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}