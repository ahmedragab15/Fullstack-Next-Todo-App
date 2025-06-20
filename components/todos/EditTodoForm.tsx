"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoFormValues, todoFormSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { updateTodoAction } from "@/actions/todoActions";
import { Checkbox } from "../ui/checkbox";
import Spinner from "../Spinner";

const EditTodoForm = ({ todo }: { todo: ITodo }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: todo.title,
      body: todo.body || "",
      completed: todo.completed,
    },
    mode: "onChange",
  });

  const onSubmit = async (data: TodoFormValues) => {
    setLoading(true);
    await updateTodoAction({id: todo.id, title: data.title, body: data.body || "", completed: data.completed});
    setLoading(false);
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <form>
          <DialogTrigger asChild>
            <Button>
              <Pen />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit this Todo</DialogTitle>
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
                          <Input placeholder="Go to the gym" {...field} />
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
                          <Textarea placeholder="Type a description." className="resize-none" {...field} />
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
                          <Spinner /> Updating
                        </>
                      ) : (
                        "Update"
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

export default EditTodoForm;
