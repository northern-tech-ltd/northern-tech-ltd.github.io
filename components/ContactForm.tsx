"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      name ? `Automation enquiry — ${name}` : "Automation enquiry"
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name || "(no name given)"}`
    );
    window.location.href = `mailto:hello@northerntechltd.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card-surface rounded-2xl p-7 md:p-8"
    >
      <label className="block">
        <span className="text-[13px] text-[color:var(--color-muted)]">
          Your name
        </span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 block w-full rounded-lg border border-[color:var(--color-border)] bg-white px-3.5 py-2.5 text-[14.5px] outline-none focus:border-[color:var(--color-dark)] focus:ring-2 focus:ring-[color:var(--color-dark)]/10 transition"
        />
      </label>

      <label className="block mt-5">
        <span className="text-[13px] text-[color:var(--color-muted)]">
          What would you like to automate?
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="mt-2 block w-full rounded-lg border border-[color:var(--color-border)] bg-white px-3.5 py-2.5 text-[14.5px] outline-none focus:border-[color:var(--color-dark)] focus:ring-2 focus:ring-[color:var(--color-dark)]/10 transition resize-none"
        />
      </label>

      <button
        type="submit"
        className="pill-dark mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[14.5px] font-medium"
      >
        Send message
        <span aria-hidden>→</span>
      </button>
      <p className="mt-3 text-center text-[12px] text-[color:var(--color-muted)]">
        Opens in your email app.
      </p>
    </form>
  );
}
