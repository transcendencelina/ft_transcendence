// TODO(team): adapt this text to what the app really does before the evaluation
// (for example, list OAuth providers or 2FA data if you implement those modules).
export default function Privacy() {
  return (
    <article className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last updated: 20 September 2026</p>
      </header>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">1. Who we are</h2>
        <p>
          ft_transcendence is a student project created as part of the 42 curriculum. It is a social
          network where users can publish posts, comment, follow other users and chat. The project is
          run by the team listed in the project README and is not a commercial service.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">2. Data we collect</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Account data: email address, display name and a hashed and salted password.</li>
          <li>Profile data you choose to add: avatar image and profile information.</li>
          <li>Content you create: posts, comments, likes, friend or follow relations and chat messages.</li>
          <li>Files you upload, such as images attached to posts.</li>
          <li>Technical data: server logs (IP address, request time, errors) and a session cookie.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">3. Why we use your data</h2>
        <p>
          We use your data only to run the application: to let you sign in, to show your content to
          other users, to deliver messages and notifications, and to keep the service secure. We do not
          sell your data, and we do not use it for advertising.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">4. Who can see your data</h2>
        <p>
          Your display name, avatar and public posts are visible to other users of the application.
          Chat messages are visible only to the people in the conversation. Team members can access
          stored data only for maintenance and debugging of the project.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">5. Cookies</h2>
        <p>
          We use a strictly necessary session cookie to keep you signed in. It is not used for
          tracking, and we do not use third-party analytics or advertising cookies.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">6. Security</h2>
        <p>
          Passwords are stored only as salted hashes. All communication with the server uses HTTPS.
          Input is validated on both the client and the server. No system is perfectly secure, so please
          use a unique password.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">7. Retention</h2>
        <p>
          We keep your data while your account exists. When you delete your account, your personal data
          and content are removed from the database. Backups and logs may keep traces for a short period.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">8. Your rights</h2>
        <p>
          You may access, correct or delete your personal data and ask for a copy of it. You can edit
          most of your data in your profile settings. For other requests, contact the team members listed
          in the project README.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">9. Changes</h2>
        <p>We may update this policy as the project evolves. The date at the top shows the latest version.</p>
      </section>
    </article>
  )
}
