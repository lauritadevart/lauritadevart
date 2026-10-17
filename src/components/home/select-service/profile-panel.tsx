import ProfileShowcase from '@/components/shared/profile-showcase'
import type { Locale } from '@/i18n'

type ProfilePanelProps = {
  locale?: Locale
}

const ProfilePanel = ({ locale }: ProfilePanelProps) => (
  <ProfileShowcase backgroundImageClassName='h-full' profileImageClassName='max-w-120' locale={locale} />
)

export default ProfilePanel
