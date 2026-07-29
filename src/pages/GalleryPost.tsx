import { Link } from "react-router-dom";
import { ArrowLeft, Camera } from "lucide-react";
import { galleries, galleryPhotoCount, type GalleryItem } from "@/data/galleries";
import { GettyEmbed } from "@/components/GettyEmbed";
import { Footer } from "@/components/Footer";

const GalleryPost = ({ id }: { id: string }) => {
  const gallery = galleries.find((g) => g.id === id);

  if (!gallery) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Gallery not found</h1>
          <Link to="/" className="text-primary hover:underline">
            ← Back home
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(gallery.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Photos carry a running number so placeholder slots read 01, 02, 03…
  let photoNumber = 0;
  const renderItem = (item: GalleryItem, i: number) => {
    if (item.type === "text") {
      return (
        <div key={i} className="max-w-2xl mx-auto my-12 md:my-16">
          {item.heading && (
            <h2 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
              {item.heading}
            </h2>
          )}
          <p className="text-lg text-muted-foreground leading-relaxed">{item.body}</p>
        </div>
      );
    }
    photoNumber += 1;
    return (
      <GettyEmbed key={i} embed={item.embed} caption={item.caption} index={photoNumber} />
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="w-full max-w-3xl mx-auto px-4 md:px-8 pt-16 md:pt-24">
        <Link
          to="/#blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Camera className="w-4 h-4" />
          Photo essay · {formattedDate} · {galleryPhotoCount(gallery)} photographs
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-8 tracking-tight">
          {gallery.title}
        </h1>
        {gallery.intro.map((para, i) => (
          <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-4">
            {para}
          </p>
        ))}
      </header>

      {/* Photos */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 md:px-8 mt-8">
        {gallery.items.map(renderItem)}
      </main>

      <div className="w-full max-w-3xl mx-auto px-4 md:px-8 mt-8 mb-16">
        <p className="text-xs text-muted-foreground/70 border-t border-border pt-6">
          Photographs embedded from Getty Images and remain the property of their respective
          copyright holders.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default GalleryPost;
