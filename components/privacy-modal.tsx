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

export function PrivacyModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button data-trigger="privacy" variant="link" className="text-sm text-gray-500 hover:text-gray-900 p-0 h-auto">
          Privacy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>How we collect, use, and protect your personal information.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] w-full">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, use our services,
              or contact us for support. This may include your name, email address, and text prompts you submit.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Provide and improve our text-to-video generation service</li>
              <li>Process your text prompts to generate videos</li>
              <li>Communicate with you about your account and our services</li>
              <li>Analyze usage patterns to improve our AI models</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              only in the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is
              completely secure.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information only as long as necessary to provide our services and fulfill the
              purposes outlined in this policy. During our beta phase, data retention policies may be subject to change.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar technologies to improve your experience, analyze usage, and provide
              personalized content. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
            <p className="mb-4">
              Our service may integrate with third-party AI providers and cloud services to deliver our text-to-video
              functionality. These providers have their own privacy policies governing their use of your data.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Portability of your data</li>
              <li>Objection to processing</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="mb-4">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13.
            </p>

            <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure
              appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting
              the new policy on our website.
            </p>

            <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us through our
              website or support channels.
            </p>

            <p className="text-sm text-gray-500 mt-8">Last updated: January 2025</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
