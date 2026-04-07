import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function ContactForm({ content }) {
  const { form } = content;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = form.errors.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = form.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = form.errors.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = form.errors.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = form.errors.messageMin;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast.success(form.successMessage);

      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousState) => ({ ...previousState, [name]: value }));

    if (errors[name]) {
      setErrors((previousState) => ({ ...previousState, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-foreground">
          {form.nameLabel}
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="mt-2 bg-secondary text-foreground placeholder:text-muted-foreground"
          placeholder={form.namePlaceholder}
        />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="text-foreground">
          {form.emailLabel}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-2 bg-secondary text-foreground placeholder:text-muted-foreground"
          placeholder={form.emailPlaceholder}
        />
        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
      </div>

      <div>
        <Label htmlFor="message" className="text-foreground">
          {form.messageLabel}
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="mt-2 bg-secondary text-foreground placeholder:text-muted-foreground"
          placeholder={form.messagePlaceholder}
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
      >
        {isSubmitting ? form.submittingLabel : form.submitLabel}
      </Button>
    </form>
  );
}

export default ContactForm;
