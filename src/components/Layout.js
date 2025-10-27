"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {

  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar fixa, fora da transicao*/}
      <Navbar />

      {/* Area de transicao */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20}}
            transition={{ duration: 0.5, ease: "easeInOut"}}
            >
              {children}
            </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
