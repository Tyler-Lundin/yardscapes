export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: {
    days: string;
    time: string;
  }[];
  socialMedia?: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact: 'email' | 'phone';
  projectTimeline?: string;
}

export const CONTACT_INFO: ContactInfo = {
  phone: '(530) 520-3396',
  email: 'dean@willows-yardscapes.com',
  address: '874 N Humboldt Ave Willows CA 95988',
  hours: [
    { days: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
    { days: 'Saturday', time: '9:00 AM - 4:00 PM' },
    { days: 'Sunday', time: 'Closed' }
  ],
  socialMedia: [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/willows-yardscapes',
      icon: 'facebook'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/willows_yardscapes',
      icon: 'instagram'
    },
    {
      platform: 'Pinterest',
      url: 'https://pinterest.com/willows_yardscapes',
      icon: 'pinterest'
    }
  ]
}; 