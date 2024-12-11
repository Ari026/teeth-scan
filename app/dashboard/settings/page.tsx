"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const settingsSections = [
  { id: "account", label: "My Account" },
  { id: "developer", label: "Developer" },
  { id: "language", label: "Language" },
  { id: "notifications", label: "Notifications" },
  { id: "privacy", label: "Privacy" },
  { id: "support", label: "Support" },
  { id: "faq", label: "FAQ" },
]

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your email to create a new password."
  },
  {
    question: "Can I change my email address?",
    answer: "Yes, you can change your email address in the 'My Account' section of the settings. Click on 'Edit' next to your email address and follow the verification process."
  },
  {
    question: "How do I enable two-factor authentication?",
    answer: "Two-factor authentication can be enabled in the 'Privacy' section of the settings. Click on 'Enable 2FA' and follow the setup instructions using an authenticator app of your choice."
  },
]

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("account")
  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(theme === "dark")

  const handleDarkModeToggle = (checked: boolean) => {
    setDarkMode(checked)
    setTheme(checked ? "dark" : "light")
    console.log(theme);
  }

  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Profile</h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">General Info</h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" placeholder="Enter your role" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" placeholder="Enter your department" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Personalization</h2>
              <div className="flex items-center space-x-2">
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={handleDarkModeToggle}
                />
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
            </div>
          </div>
        )
      case "faq":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )
      default:
        return <p>Content for {activeSection} goes here.</p>
    }
  }

  return (
    <div className="p-6 flex">
      <div className="w-64 pr-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <nav>
          <ul className="space-y-2">
            {settingsSections.map((section) => (
              <li key={section.id}>
                <Button
                  variant={activeSection === section.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-1">
        <div className="bg-card text-card-foreground rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">
            {settingsSections.find((s) => s.id === activeSection)?.label}
          </h2>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

