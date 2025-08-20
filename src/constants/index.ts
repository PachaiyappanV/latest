import {
  ArrowUpDown,
  AtSign,
  Bot,
  Clock,
  ContactRound,
  CreditCard,
  FileText,
  ImageIcon,
  Inbox,
  Key,
  LayoutGrid,
  Mail,
  Megaphone,
  MessageCircle,
  MessageSquare,
  MessageSquareText,
  Package,
  Phone,
  Settings,
  ShoppingBag,
  Tag,
  User,
  Users,
  Workflow,
} from "lucide-react";
export const navMain = [
  {
    title: "Dashboard",
    icon: LayoutGrid,
    isActive: true,
  },
  {
    title: "Chat",
    icon: MessageSquareText,
    isActive: false,
  },
  {
    title: "Contacts",
    icon: ContactRound,
    isActive: false,
  },
  {
    title: "CTWA",
    icon: MessageCircle,
    isActive: false,
  },
  {
    title: "Campaign",
    icon: Megaphone,
    isActive: false,
  },
  {
    title: "Workflows",
    icon: Workflow,
    isActive: false,
  },
  {
    title: "Flow Builder",
    icon: ArrowUpDown,
    isActive: false,
  },
  {
    title: "Apps",
    icon: LayoutGrid,
    isActive: false,
  },
  {
    title: "Commerce",
    icon: ShoppingBag,
    isActive: false,
  },
  {
    title: "Payment",
    icon: CreditCard,
    isActive: false,
  },
  {
    title: "Delivery",
    icon: Package,
    isActive: false,
  },
  {
    title: "Settings",
    icon: Settings,
    isActive: false,
  },
];

export const navSecondary = {
  Chat: [
    { title: "Inbox", icon: Inbox },
    { title: "Mentions", icon: AtSign },
    { title: "All", icon: Users },
    { title: "Bot", icon: Bot },
    { title: "Unread", icon: Mail },
  ],
  Settings: [
    {
      label: "GENERAL",
      items: [
        { title: "Account Details", icon: User },
        { title: "Working Hours", icon: Clock },
        { title: "Users & Role", icon: Users },
        { title: "Teams", icon: Users },
        { title: "Inbox Settings", icon: Mail },
      ],
    },
    {
      label: "CHANNEL",
      items: [{ title: "Whatsapp", icon: Phone }],
    },
    {
      label: "CRM",
      items: [
        { title: "Field Collection", icon: FileText },
        { title: "Tags", icon: Tag },
      ],
    },
    {
      label: "CONTENT",
      items: [
        { title: "Quick Messages", icon: MessageSquare },
        { title: "Media", icon: ImageIcon },
      ],
    },
    {
      label: "USER",
      items: [
        { title: "Profile", icon: User },
        { title: "Change Password", icon: Key },
      ],
    },
  ],
};
