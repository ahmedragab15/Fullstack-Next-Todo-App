"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoFormValues, todoFormSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { createTodoAction } from "@/actions/todoActions";
import { Checkbox } from "../ui/checkbox";
import Spinner from "../Spinner";

const AddTodoForm = ({ userId }: { userId: string | null }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: "",
      body: "",
      completed: false,
    },
    mode: "onChange",
  });

  const onSubmit = async ({ title, body, completed }: TodoFormValues) => {
    setLoading(true);
    await createTodoAction({ title, body: body || "", completed, userId });
    setLoading(false);
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <form>
          <DialogTrigger asChild >
            <Button >
              <Plus /> New Todo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add a new todo</DialogTitle>
            </DialogHeader>
            {/* Todo Form */}
            <div className="py-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Go to the gym..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Type a description..." className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="completed"
                    render={({ field }) => (
                      <FormItem className="flex items-start">
                        <FormControl>
                          <Checkbox id="completed" checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel htmlFor="completed">Completed</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="outline">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit" disabled={loading}>
                      {loading ? (
                        <>
                          <Spinner /> Saving
                        </>
                      ) : (
                        "Save"
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default AddTodoForm;
