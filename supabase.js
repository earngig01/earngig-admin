const SUPABASE_URL = "https://ytvtdelwefykeqwztcyo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CLTeqgEB6JSQ7Kqq6rQARw_RV31Ccg3";
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
const SUPABASE_URL = "https://ytvtdelwefykeqwztcyo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CLTeqgEB6JSQ7Kqq6rQARw_RV31Ccg3";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

// TEMPORARY: Show whether a user is logged in
supabaseClient.auth.getUser().then(({ data, error }) => {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<pre style="padding:20px;background:white;color:black;">
USER: ${JSON.stringify(data.user, null, 2)}
ERROR: ${JSON.stringify(error, null, 2)}
</pre>`
  );
});
