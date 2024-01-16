"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "ghost" | "default" | "link" | "destructive" | "outline" | "secondary" | "primary";
}

const FormSubmit = ({ children, disabled, className, variant = "primary" }: FormSubmitProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending || disabled} className={cn(className)} variant={variant}>
      {children}
    </Button>
  )
}

export default FormSubmit