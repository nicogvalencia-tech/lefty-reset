import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata = {
  title: "Join the Lefty Reset — Register Free",
  description: "Sign up for the Lefty Reset 60-Day Transformation Challenge. Free to join. Compete for $1,000+ in prizes.",
};

export default function RegisterPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen bg-white">
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
