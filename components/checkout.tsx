"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address1: z.string().min(5, "Address is required"),
  address2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  postalCode: z.string().min(5, "Postal code is required"),
  country: z.string().min(2, "Country is required"),
  paymentMethod: z.enum(["credit", "paypal"]),
  cardNumber: z.string().min(16, "Card number is required").max(16),
  cardExpiry: z.string().min(5, "Expiry date is required").max(5),
  cardCVC: z.string().min(3, "CVC is required").max(4),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const paymentMethod = watch("paymentMethod")

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    setIsSubmitting(false)
    toast({
      title: "Order placed!",
      description: "Your order has been successfully placed.",
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-7 ">
      <div className="space-y-2 ">
        <h2 className="text-2xl font-bold">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" {...register("firstName")} />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" {...register("lastName")} />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...register("phone")} />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Shipping Address</h2>
        <div>
          <Label htmlFor="address1">Address Line 1</Label>
          <Input id="address1" {...register("address1")} />
          {errors.address1 && <p className="text-red-500 text-sm">{errors.address1.message}</p>}
        </div>
        <div>
          <Label htmlFor="address2">Address Line 2 (Optional)</Label>
          <Input id="address2" {...register("address2")} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" {...register("city")} />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input id="state" {...register("state")} />
            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input id="postalCode" {...register("postalCode")} />
            {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode.message}</p>}
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Select onValueChange={(value) => register("country").onChange({ target: { value } })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="k">Pakistan</SelectItem>
                {/* Add more countries as needed */}
              </SelectContent>
            </Select>
            {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Payment Information</h2>
        <RadioGroup onValueChange={(value) => register("paymentMethod").onChange({ target: { value } })}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="credit" id="credit" />
            <Label htmlFor="credit">Credit Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal">PayPal</Label>
          </div>
        </RadioGroup>
        {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>}

        {paymentMethod === "credit" && (
          <div className="space-y-2">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" {...register("cardNumber")} />
              {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cardExpiry">Expiry Date (MM/YY)</Label>
                <Input id="cardExpiry" {...register("cardExpiry")} placeholder="MM/YY" />
                {errors.cardExpiry && <p className="text-red-500 text-sm">{errors.cardExpiry.message}</p>}
              </div>
              <div>
                <Label htmlFor="cardCVC">CVC</Label>
                <Input id="cardCVC" {...register("cardCVC")} />
                {errors.cardCVC && <p className="text-red-500 text-sm">{errors.cardCVC.message}</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="notes">Order Notes (Optional)</Label>
        <Textarea id="notes" {...register("notes")} />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Placing Order..." : "Place Order"}
      </Button>
    </form>
  )
}

