"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, ExternalLink, Droplets, Wallet, Menu, X } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const HexagonBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hexagons"
            width="50"
            height="43.4"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2) rotate(0)"
          >
            <path
              d="M25,17.3 L25,0 L0,8.7 L0,34.7 L25,43.4 L50,34.7 L50,8.7 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export default function Component() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      <HexagonBackground />
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 relative z-10">
        <Link className="flex items-center justify-center" href="#">
          <svg
            className="h-8 w-8"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93.94 42.63H13.78l20.28-35.12h80.16L93.94 42.63zM43.63 88.78l-29.85-51.7h80.16l29.85 51.7H43.63zm70.59 31.59H34.06L13.78 85.25h80.16l20.28 35.12z"
              fill="#00FFA3"
            />
          </svg>
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Solana Cookbook
          </span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <Link href="/faq">
            <Button
              variant="ghost"
              className="text-sm font-medium hover:text-green-400"
            >
              FAQ
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="text-sm font-medium hover:text-green-400"
            onClick={() => {
              toast({
                description: "Coming soon. Use our other tools until then!",
              });
            }}
          >
            Other Tools
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-900"
          >
            <Link href="/faq">
              <Button
                variant="ghost"
                className="text-sm font-medium hover:text-green-400"
              >
                FAQ
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:text-green-400"
              onClick={() => {
                toast({
                  description: "Coming soon. Use our other tools until then!",
                });
              }}
            >
              Other Tools
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                  Solana Cookbook
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Forge the future of decentralized applications with
                  cutting-edge Solana tools.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-x-4"
              >
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-green-400 to-blue-500 px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="https://solana.com/developers"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="https://docs.solana.com/"
                >
                  Documentation
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Powerful Developer Tools
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Supercharge your Solana development with our suite of
                  essential tools.
                </p>
              </div>
              <Tabs defaultValue="faucet" className="w-full max-w-3xl">
                <TabsList className="grid w-full grid-cols-2 bg-gray-900">
                  <TabsTrigger value="faucet">Test SOL Faucet</TabsTrigger>
                  <TabsTrigger value="wallet">Wallet Generator</TabsTrigger>
                </TabsList>
                <TabsContent value="faucet">
                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-2xl text-green-400">
                        Test SOL Faucet
                      </CardTitle>
                      <CardDescription>
                        Get test SOL tokens instantly for development and
                        testing.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400">
                        Our faucet provides a seamless way to fund your test
                        wallets, ensuring you have the resources you need for
                        your Solana projects.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 bg-green-500 text-gray-900 shadow hover:bg-green-500/90 h-9 px-4 py-2 w-full"
                        href="/faucet"
                      >
                        Access Faucet
                      </Link>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="wallet">
                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-400">
                        Wallet Generator
                      </CardTitle>
                      <CardDescription>
                        Create new Solana wallets effortlessly for your
                        projects.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400">
                        Our wallet generator ensures secure and unique addresses
                        for your applications, streamlining your development
                        process.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-gray-900 shadow hover:bg-blue-500/90 h-9 px-4 py-2 w-full"
                        href="/wallet"
                      >
                        Generate Wallet
                      </Link>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
        <section
          id="tools"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Explore More Tools
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enhance your Solana development experience with these
                  additional resources.
                </p>
              </motion.div>
              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-green-500 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium text-white">
                        Explorer
                      </CardTitle>
                      <Code className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400">
                        Dive deep into transactions and accounts on the Solana
                        blockchain.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 border border-gray-800 bg-gray-950 text-gray-50 shadow hover:bg-gray-800 hover:text-gray-50 h-9 px-4 py-2 w-full"
                        href="https://explorer.solana.com/"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Explorer
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium text-white">
                        Playground
                      </CardTitle>
                      <Code className="h-4 w-4 text-blue-400" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400">
                        Experiment with Solana code in an interactive
                        environment.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 border border-gray-800 bg-gray-950 text-gray-50 shadow hover:bg-gray-800 hover:text-gray-50 h-9 px-4 py-2 w-full"
                        href="https://beta.solpg.io/"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Playground
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 relative z-10">
        <p className="text-xs text-gray-400">
          © 2024 Solana Dev Tools. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-green-400"
            href="https://x.com/0xAmansol"
          >
            Twitter
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-blue-400"
            href="https://github.com/0xAmansol"
          >
            Github
          </Link>
        </nav>
      </footer>
    </div>
  );
}
