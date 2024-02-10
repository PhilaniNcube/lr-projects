
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
			<div className="space-y-8">
				<div className="space-y-2">
					<p className="text-gray-500 dark:text-gray-400">
						Fill out the form below and we will get back to you as soon as
						possible.
					</p>
				</div>
				<div className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="first-name">First name</Label>
							<Input
								className="border-b outline-none"
								name="first-name"
								id="first-name"
								placeholder="Enter your first name"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="last-name">Last name</Label>
							<Input
								className="border-b outline-none"
								id="last-name"
								name="last-name"
								placeholder="Enter your last name"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							className="border-b outline-none"
							id="email"
							name="email"
							placeholder="Enter your email"
							type="email"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="message">Message</Label>
						<Textarea
							className="min-h-[100px] border-b outline-none"
							id="message"
							name="message"
							placeholder="Enter your message"
						/>
					</div>
					<Button>Send message</Button>
				</div>
			</div>
		);
}

