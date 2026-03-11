import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CheckInForm from "@/components/CheckInForm";

export const metadata = {
  title: "Weekly Check-In — Lefty Reset",
  description: "Submit your weekly check-in for the Lefty Reset 60-Day Transformation Challenge.",
};

export default function CheckInPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen bg-white">
        <CheckInForm />
      </main>
      <Footer />
    </>
  );
}
