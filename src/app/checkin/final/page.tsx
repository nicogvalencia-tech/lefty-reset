import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCheckInForm from "@/components/FinalCheckInForm";

export const metadata = {
  title: "Final Check-In — Lefty Reset",
  description: "Submit your Day 60 final check-in for the Lefty Reset Challenge.",
};

export default function FinalCheckInPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen bg-white">
        <FinalCheckInForm />
      </main>
      <Footer />
    </>
  );
}
