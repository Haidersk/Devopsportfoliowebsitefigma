import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Let's discuss
            how I can help optimize your infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 text-center">
            <div className="inline-flex p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg mb-2 dark:text-white">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">contact@devops.pro</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-lg mb-2 dark:text-white">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg mb-2 dark:text-white">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto mt-12 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm dark:text-gray-200">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm dark:text-gray-200">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm dark:text-gray-200">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
