"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "非法邮箱信息",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "非法输入信息",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "来自个人博客网站<onboarding@resend.dev>",
      to: "xuziwei89@gmail.com",
      subject: "从个人博客的联系表单发送的邮件",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
