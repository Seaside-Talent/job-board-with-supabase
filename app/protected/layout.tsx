import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-white/80 shadow-lg sticky top-0 z-40 backdrop-blur-md">
          <div className="w-full max-w-6xl flex justify-between items-center px-4 md:px-10 py-4">
            <Link href="/" className="flex flex-col md:flex-row md:items-end gap-1 group cursor-pointer" tabIndex={0} aria-label="Go to homepage">
              <span className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight leading-tight group-hover:text-blue-900 transition">
                Seaside Talent
              </span>
              <span className="text-sm text-gray-500 md:ml-3 md:mb-1 leading-tight group-hover:text-blue-700 transition">Healthcare Job Board</span>
            </Link>
            {<AuthButton />}
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          {children}
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
