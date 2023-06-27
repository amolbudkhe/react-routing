import NewsletterSignup from "../components/NewsLetterSignUp";
import PageContent from "../components/PageContent";

function NewsLetterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsLetterPage;

export async function action({ request }) {
  // console.log(request);

  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
