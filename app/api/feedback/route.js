import fs from "fs";
import path from "path";

const feedbackFilePath = path.join(process.cwd(), "data", "feedback.json");

// Handle the GET request
export async function GET() {
  try {
    const feedbackData = JSON.parse(fs.readFileSync(feedbackFilePath, "utf-8"));
    return new Response(JSON.stringify(feedbackData), { status: 200 });
  } catch (error) {
    console.error("Error reading feedback file:", error);
    return new Response(
      JSON.stringify({ message: "Failed to load feedbacks" }),
      {
        status: 500,
      }
    );
  }
}

// Handle the POST request
export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const feedbackData = JSON.parse(fs.readFileSync(feedbackFilePath, "utf-8"));
    feedbackData.push(body); // Add the new feedback
    fs.writeFileSync(feedbackFilePath, JSON.stringify(feedbackData, null, 2));
    return new Response(JSON.stringify(feedbackData), { status: 201 });
  } catch (error) {
    console.error("Error writing to feedback file:", error);
    return new Response(
      JSON.stringify({ message: "Failed to save feedback" }),
      {
        status: 500,
      }
    );
  }
}
