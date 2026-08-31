export interface NavItem {
  label: string;
  hasDropdown?: boolean;
  href?: string;
}

export interface CompanyLogo {
  name: string;
  iconType: 'feather' | 'bolt' | 'global' | 'lightbox';
}

export interface ProductItem {
  id: number;
  name: string;
  popularity: number; // percentage 0-100
  sales: string;
}

export interface BannerConfig {
  announcementText: string;
  announcementLinkText: string;
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  socialProofText: string;
  backgroundColor: string; // default #000000
  fontFamily: string; // DM Sans
  textColor: string; // pure white
}
