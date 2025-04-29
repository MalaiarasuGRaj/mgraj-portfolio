
import { MotionDiv } from "../animation/MotionDiv";
import { MotionButton } from "../animation/MotionButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
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
});

type FormValues = z.infer<typeof formSchema>;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      reason: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // In a real application, you would send this data to an API or email service
    console.log("Form submitted with data:", data);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <section id="contact" className="section-padding">
      <MotionDiv type="fade" direction="up">
        <h2 className="heading text-center">Let's Connect</h2>
      </MotionDiv>

      <div className="max-w-3xl mx-auto mt-12">
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
