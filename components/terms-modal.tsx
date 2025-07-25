import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

export function TermsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button data-trigger="terms" variant="link" className="text-sm text-gray-500 hover:text-gray-900 p-0 h-auto">
          Terms
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>Please read and accept the following terms and conditions.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] w-full">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using blid.io services, you agree to be bound by these Terms and Conditions. If you do not
              agree to all of these Terms, do not access or use our services.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              blid.io is an AI-powered text-to-video generation service. We provide tools to create videos from text
              prompts using artificial intelligence technology. The service is currently in beta testing.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. User Accounts and Registration</h2>
            <p className="mb-4">
              To access certain features, you may need to create an account. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities under your account.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
            <p className="mb-4">
              You agree not to use our service to create content that is illegal, harmful, threatening, abusive,
              defamatory, or violates any third-party rights. We reserve the right to suspend or terminate accounts that
              violate these terms.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Content and Intellectual Property</h2>
            <p className="mb-4">
              Videos generated through blid.io are owned by you, subject to our underlying rights in the technology. You
              grant us a limited license to process your prompts to generate videos. We retain all rights to our
              software, algorithms, and service infrastructure.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Beta Service Limitations</h2>
            <p className="mb-4">
              Our service is currently in beta. We make no guarantees about service availability, performance, or data
              retention. The service may be modified or discontinued at any time during the beta period.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Payment and Billing</h2>
            <p className="mb-4">
              Beta access is currently free. Future paid plans will be subject to separate billing terms. We reserve the
              right to change pricing with reasonable notice.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Privacy and Data</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and
              protect your information.
            </p>

            <h2 className="text-2xl font-bold mb-4">9. Disclaimers</h2>
            <p className="mb-4">
              Our service is provided "as is" without warranties of any kind. We do not guarantee the accuracy, quality,
              or suitability of generated videos for any particular purpose.
            </p>

            <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, blid.io shall not be liable for any indirect, incidental, special,
              or consequential damages arising from your use of our service.
            </p>

            <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
            <p className="mb-4">
              Either party may terminate this agreement at any time. Upon termination, your access to the service will
              cease, and we may delete your account data.
            </p>

            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="mb-4">
              We may update these terms from time to time. Continued use of our service after changes constitutes
              acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <p className="mb-4">
              If you have questions about these terms, please contact us through our website or support channels.
            </p>

            <p className="text-sm text-gray-500 mt-8">Last updated: January 2025</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
