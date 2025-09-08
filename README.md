I have a proxy server that lets you view **production data** in your local environments. Sometimes it’s useful to see how things look in real-world conditions.

Connection is simple:

1. Log in to prod.
2. Copy the `auth` header (without `Bearer`).
3. Paste it into your `.env`.
4. In the frontend config, set for reports:

   ```bash
   # VUE_APP_REPORT_API_URL=http://localhost:9090
   ```
5. Run both projects. That’s it.

There’s a list of communities in the proxy code — you can pick the ones that work more or less reliably.

⚠️ Just don’t use it to **modify data**, that could be dangerous.
