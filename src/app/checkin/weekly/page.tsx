import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WeeklyCheckInForm from "@/components/WeeklyCheckInForm";

export const metadata = {
  title: "Weekly Check-In — Lefty Reset",
  description: "Submit your weekly check-in for the Lefty Reset Challenge.",
};

export default function WeeklyCheckInPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen bg-white">
        <WeeklyCheckInForm />
      </main>
      <Footer />
    </>
  );
}
