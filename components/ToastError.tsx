'use client';

import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';

interface ToastErr {
  title?: string;
  altText?: string;
  descriprion?: string;
}

export const ToastError: React.FC<ToastErr> = ({
  altText,
  descriprion,
  title,
}) => {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: 'destructive',
          title: title,
          description: descriprion,
          action: (
            <ToastAction altText={altText ? altText : ''}>
              Try again
            </ToastAction>
          ),
        });
      }}
    >
      Show Toast
    </Button>
  );
};
