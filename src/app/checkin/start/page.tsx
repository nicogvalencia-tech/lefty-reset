import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StartingCheckInForm from "@/components/StartingCheckInForm";

export const metadata = {
  title: "Starting Check-In — Lefty Reset",
  description: "Submit your Day 1 starting check-in for the Lefty Reset Challenge.",
};

export default function StartingCheckInPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen bg-white">
        <StartingCheckInForm />
      </main>
      <Footer />
    </>
  );
}
