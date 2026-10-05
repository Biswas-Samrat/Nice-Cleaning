export const businessPhone = "+44 7955 620633";
export const businessPhoneLink = "tel:+447955620633";
export const businessWhatsAppLink = "https://wa.me/447955620633";
export const facebookPageUrl =
  "https://www.facebook.com/profile.php?id=61558825894184";
export const facebookHandle = "@thenicecleaner";
export const businessAddress = "Glan Llyn, Newport, NP19 4DP, United Kingdom";

export function createWhatsAppUrl(
  message = "Hi Nice Cleaning, I'd like to enquire about a cleaning service.",
) {
  return `${businessWhatsAppLink}?text=${encodeURIComponent(message)}`;
}
