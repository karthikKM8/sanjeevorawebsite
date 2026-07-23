import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, Heart } from "lucide-react";
import logo from "@/assets/sanjeevora logo.jpeg";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-secondary/40 to-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Sanjeevora Vidya Mission" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="font-display text-xl font-bold">Sanjeevora Vidya Mission</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Empowering underprivileged children and young adults through
              nutrition, education, mentorship, skill development, and career
              opportunities — so every child can dream, learn, and succeed.
            </p>
            <div className="mt-4 flex gap-2">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/our-mission" className="hover:text-primary">Our Mission</Link></li>
              <li><Link to="/causes" className="hover:text-primary">Our Programs</Link></li>
              <li><Link to="/volunteer" className="hover:text-primary">Volunteer</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> No. 33, Top Floor, CBI Main Road, Pilappa Garden, Ganganagar, Bengaluru – 560032</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +91 70198 27645</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> hello@sanjeevora.org</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Get Involved
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">
              ₹800 can give a child a month of nourishing meals and learning support.
              Be the reason someone smiles.
            </p>
            <Link
              to="/donate"
              className="mt-4 inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow"
            >
              <Heart className="h-4 w-4 fill-current" /> Donate now
            </Link>
            <ul className="mt-5 space-y-1.5 text-xs text-muted-foreground">
              <li><Link to="/volunteer" className="hover:text-primary">Volunteer with us</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Partner with us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
            <a href="/PrivacyPolicy-sanjeevora.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Privacy Policy</a>
            <a href="/TermsandConditions-sanjeevora.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Terms &amp; Conditions</a>
            <a href="/FAQs-sanjeevora.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary">FAQs</a>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-2 text-xs text-muted-foreground sm:flex-row sm:gap-4">
            <span className="font-semibold text-foreground/80">CIN Number: U85499KA2026NPL223079</span>
            <span className="hidden text-border sm:inline">|</span>
            <span className="font-semibold text-foreground/80">GST: 29ABUCS1757Q1Z3</span>
          </div>
          <div className="mt-4 flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
            <p>© 2026 Sanjeevora Vidya Mission. All Rights Reserved.</p>
            <p>Empowering Children Through Food, Education, Opportunity &amp; Hope.</p>
          </div>
          <p className="mt-3 text-center text-xs italic text-muted-foreground">
            "Together, we can build a future where every child has the opportunity to dream, learn, and thrive."
          </p>
        </div>
      </div>
    </footer>
  );
}