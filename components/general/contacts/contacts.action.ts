"use server";

import { z } from "zod";
import { FSchema } from "./schema";

export async function submitForm(data: z.infer<typeof FSchema>) {
  const { service, full_name, email, phone, vin_code } = data;

  try {
    const res = await fetch(process.env.APPS_SCRIPT_URL!, {
      method: "POST",
      // ВАЖНО: text/plain обходит строгие CORS проверки при работе с Google Scripts [web:42]
      headers: { 
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({ service, full_name, email, phone, vin_code }),
      // Разрешаем fetch следовать по 302 редиректам, которые делает Google
      redirect: "follow", 
    });

    // Получаем ответ как текст, так как res.json() может упасть из-за редиректа [web:42]
    const resultText = await res.text();

    // Логируем для отладки в терминале сервера
    console.log("Apps Script Response:", resultText);

    // Даже если res.ok = false (из-за потери заголовков при 302 редиректе),
    // если в тексте ответа есть "success", значит данные успешно записаны в таблицу.
    if (resultText.includes("success")) {
      return { success: true };
    }

    return { success: false, error: "Google Script returned an error" };

  } catch (error) {
    console.error("Fetch Error:", error);
    return { success: false, error: "Failed to fetch Apps Script" };
  }
}
