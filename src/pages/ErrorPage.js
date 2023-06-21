import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error Occured!</h1>
        <p>Could Not find this Page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
