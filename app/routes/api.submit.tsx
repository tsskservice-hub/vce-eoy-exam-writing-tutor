import { json } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method Not Allowed" }, { status: 405 });
  }

  try {
    const formData = await request.formData();
    const imageFile = formData.get('image') as File | null;
    const problemNumber = formData.get('problemNumber') as string | null;
    const settingPace = formData.get('pace') as string || 'normal';
    const settingTone = formData.get('tone') as string || 'balanced';

    return json({
      feedback_completed: true,
      evaluation_rank: 1,
      star_color: "gold",
      score_percentage: 95,
      message_to_student: "素晴らしいライティングです！VCEの指定漢字と必須文法が完璧な形で盛り込まれています。"
    });

  } catch (error: any) {
    console.error('Error in submit API route:', error);
    return json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

