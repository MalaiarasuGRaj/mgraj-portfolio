
import { MotionDiv } from "../animation/MotionDiv";
import { MotionButton } from "../animation/MotionButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import emailjs from 'emailjs-com';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  reason: z.string().min(10, {
    message: "Please provide a reason with at least 10 characters.",
  }),
  email: z.string().email({
    message: "Please provide a valid email address.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

// TODO: Replace these with your actual EmailJS IDs from your EmailJS dashboard
// 1. Go to https://dashboard.emailjs.com/sign-up
// 2. Create a service (Gmail, Outlook, etc.)
// 3. Create a template using the HTML template provided 
// 4. Get your IDs from the dashboard
const EMAILJS_SERVICE_ID = "service_rw7m1nt"; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "template_9eiatal"; // Replace with your Template ID
const EMAILJS_USER_ID = "NII5Q_BAZDsiDQkJG"; // Replace with your Public Key

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      reason: "",
      email: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    setEmailError(null);
    
    // Log the form data (for debugging)
    console.log("Form submitted with data:", data);
    
    // Prepare template parameters - these must match the variables in your EmailJS template
    const templateParams = {
      from_name: data.fullName,
      from_email: data.email,
      phone_number: data.phoneNumber,
      message: data.reason,
      to_email: "govindarajmalaiarasu@gmail.com",
    };


    // Send the email using EmailJS
    emailjs.send(
      EMAILJS_SERVICE_ID, 
      EMAILJS_TEMPLATE_ID, 
      templateParams, 
      EMAILJS_USER_ID
    )
    .then(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      setEmailError("Failed to send email. Please try again later or contact directly at govindarajmalaiarasu@gmail.com");
      toast.error("Failed to send message. Please try again.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  }

  return (
    <section id="contact" className="section-padding">
      <MotionDiv type="fade" direction="up">
        <h2 className="heading text-center">Let's Talk</h2>
      </MotionDiv>

      <div className="max-w-3xl mx-auto mt-12">
        {emailError && (
          <Alert variant="destructive" className="mb-6">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{emailError}</AlertDescription>
          </Alert>
        )}

        <MotionDiv
          className="card bg-muted p-8"
          type="fade"
          delay={0.2}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-portfolio-purple">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        {...field} 
                        className="bg-portfolio-black/50 border-portfolio-purple/30 focus-visible:border-portfolio-purple focus-visible:ring-portfolio-purple"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-portfolio-purple">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Your email address" 
                        {...field} 
                        className="bg-portfolio-black/50 border-portfolio-purple/30 focus-visible:border-portfolio-purple focus-visible:ring-portfolio-purple"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-portfolio-purple">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your phone number" 
                        {...field} 
                        className="bg-portfolio-black/50 border-portfolio-purple/30 focus-visible:border-portfolio-purple focus-visible:ring-portfolio-purple"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-portfolio-purple">Why do you want to contact me?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project or inquiry" 
                        {...field} 
                        className="bg-portfolio-black/50 border-portfolio-purple/30 focus-visible:border-portfolio-purple focus-visible:ring-portfolio-purple min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <MotionButton
                type="submit"
                className="w-full bg-portfolio-purple text-white hover:bg-portfolio-purple-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2" size={18} /> Send Message
                  </>
                )}
              </MotionButton>
            </form>
          </Form>
        </MotionDiv>

        <MotionDiv
          className="mt-12 text-center"
          type="fade"
          delay={0.4}
        >
          <div className="flex items-center justify-center gap-2 text-portfolio-purple-light">
            <Mail size={24} />
            <a 
              href="mailto:govindarajmalaiarasu@gmail.com"
              className="text-lg hover:text-portfolio-purple transition-colors"
            >
              govindarajmalaiarasu@gmail.com
            </a>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

