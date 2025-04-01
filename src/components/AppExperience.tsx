
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const AppExperience = () => {
  const screens = [
    {
      title: "Digital Closet",
      description: "Easily organize and manage your clothing items",
      image: "https://i.ibb.co/PZ1XKZQ/digital-closet.png",
      features: [
        "AI-powered item categorization",
        "Detailed item tracking",
        "Set items for sale or sharing",
        "Track item history"
      ]
    },
    {
      title: "Item Exchange",
      description: "Connect with others and exchange items securely",
      image: "https://i.ibb.co/bvH9v4q/item-exchange.png",
      features: [
        "In-app messaging with other users",
        "Secure payment processing",
        "QR code for rack access",
        "Exchange history and receipts"
      ]
    },
    {
      title: "Community Feed",
      description: "Get inspired and share your style with others",
      image: "https://i.ibb.co/gvZKLbq/community-feed.png",
      features: [
        "Daily outfit inspiration",
        "Follow favorite style creators",
        "Personalized recommendations",
        "Share outfits from your closet"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-bloem-ivory">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">The bloem Experience</h2>
          <p className="body-md text-gray-600">
            See how our app transforms the way you manage, share, and discover clothing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <Card key={index} className="bg-white border border-gray-100 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{screen.title}</h3>
                  <p className="text-gray-600 mb-4">{screen.description}</p>
                </div>
                
                <div className="px-6 pb-6">
                  <div className="bg-gray-100 rounded-lg p-2 mb-6">
                    <div className="aspect-[9/16] w-full overflow-hidden rounded-md bg-white shadow-inner">
                      <img 
                        src={screen.image} 
                        alt={screen.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {screen.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-bloem-green shrink-0 mt-0.5 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppExperience;
