"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const EmailSubscriptionSchema = z.object({
  email: z.string().email({ message: "Please enter email." }),
});

const Subscription = () => {
  const form = useForm<z.infer<typeof EmailSubscriptionSchema>>({
    resolver: zodResolver(EmailSubscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof EmailSubscriptionSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input className="w-full" placeholder="Enter your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="uppercase text-brand-gray-dark border border-brand-gray-dark bg-transparent hover:bg-gray-100 px-5 py-2"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  );
};

export default Subscription;
