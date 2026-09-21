// TODO(team): adapt this text to what the app really does before the evaluation.
export default function Terms() {
  return (
    <article className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-sm text-slate-500">Last updated: 20 September 2026</p>
      </header>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">1. Acceptance</h2>
        <p>
          By creating an account or using ft_transcendence you agree to these terms. If you do not
          agree, please do not use the application.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">2. About the service</h2>
        <p>
          ft_transcendence is an educational project made by students of the 42 curriculum. It is
          provided as is, without guarantees of availability, and data may be reset during development
          and evaluation.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">3. Your account</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>You must provide a valid email address and keep your password secret.</li>
          <li>You are responsible for everything that happens under your account.</li>
          <li>One person should not create multiple accounts to abuse the service.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>post illegal, hateful, harassing or sexually explicit content;</li>
          <li>upload malware or files you have no right to share;</li>
          <li>spam other users or send unsolicited bulk messages;</li>
          <li>attack, overload or try to gain unauthorised access to the service or other accounts.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">5. Your content</h2>
        <p>
          You keep ownership of what you post. You give the project the right to store and display it
          within the application so the service can work. You are responsible for having the rights to
          what you upload.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">6. Moderation and termination</h2>
        <p>
          We may remove content or suspend accounts that break these terms. You can delete your account
          at any time from your profile settings.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">7. Liability</h2>
        <p>
          The service is provided for learning purposes. To the extent allowed by law, the team is not
          liable for loss of data or any damages resulting from using the application.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">8. Privacy</h2>
        <p>
          How we handle personal data is described in our Privacy Policy, which is part of these terms.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">9. Changes</h2>
        <p>We may change these terms. Continuing to use the service after a change means you accept it.</p>
      </section>
    </article>
  )
}
