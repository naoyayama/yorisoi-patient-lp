import React from 'react';
import {
  ConsultationSvg,
  ConfusedSvg,
  MotherBabySvg,
  FamilySvg,
  NotificationSvg,
  RecordingSvg,
  SecurityShieldSvg,
  DoctorTrustSvg,
  PatientSvg,
  ParentSvg,
  SummarySvg,
  PrivacySvg,
} from './IllustrationSvgs';

/**
 * 静的画像を使う場合は true にし、public/images/ に
 * hero.png, confused.png, mother.png, family.png, check.png, recording.png,
 * security.png, doctor.png, patient.png, parent.png, summary.png, privacy.png
 * を置いてください。
 */
const USE_STATIC_IMAGES = true; // recording.png を配置済み。他は未配置時はプレースホルダー表示

interface IllustrationProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageIllustration: React.FC<IllustrationProps> = ({ src, alt, className }) => (
  <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain mix-blend-multiply"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100" height="100" fill="%23f0faf5" /%3E%3Ctext x="50%25" y="50%25" font-family="sans-serif" font-size="10" fill="%23888" text-anchor="middle" dy=".3em"%3EImage Placeholder%3C/text%3E%3C/svg%3E';
      }}
    />
  </div>
);

/** ① ヒーロー画像（スマホと握手） */
export const ConsultationIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/hero.png" alt="よりそい：スマホと人の握手" className={className} />
  ) : (
    <ConsultationSvg className={className} />
  );

/** ② 悩みセクション：【混乱】 */
export const ConfusedIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/confused.png" alt="悩み：混乱" className={className} />
  ) : (
    <ConfusedSvg className={className} />
  );

/** ② 悩みセクション：【育児】 */
export const MotherBabyIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/mother.png" alt="悩み：育児中の通院" className={className} />
  ) : (
    <MotherBabySvg className={className} />
  );

/** ② 悩みセクション：【不安】 */
export const FamilyIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/family.png" alt="悩み：家族の不安" className={className} />
  ) : (
    <FamilySvg className={className} />
  );

/** ③ 仕組み・操作：【完了チェック】 */
export const NotificationIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/check.png" alt="操作完了" className={className} />
  ) : (
    <NotificationSvg className={className} />
  );

/** ③ 仕組み・操作：【操作する手】 */
export const RecordingIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/recording.png" alt="録音開始" className={className} />
  ) : (
    <RecordingSvg className={className} />
  );

/** ④ 信頼・安心：【セキュリティの盾】 */
export const SecurityShieldIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/security.png" alt="セキュリティ" className={className} />
  ) : (
    <SecurityShieldSvg className={className} />
  );

/** ④ 信頼・安心：【OKサインの医師】 */
export const DoctorTrustIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/doctor.png" alt="安心の医師" className={className} />
  ) : (
    <DoctorTrustSvg className={className} />
  );

/** ⑤ 【「覚えること」はAIに任せて】 */
export const PatientIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/patient.png" alt="患者さん：AIにお任せ" className={className} />
  ) : (
    <PatientSvg className={className} />
  );

/** ⑥ 【お子様が泣いても大丈夫】 */
export const ParentIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/parent.png" alt="パパ・ママ：お子様の通院" className={className} />
  ) : (
    <ParentSvg className={className} />
  );

/** ⑦ 【診察の内容を、AIがやさしく「要約」】 */
export const SummaryIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/summary.png" alt="AI要約機能" className={className} />
  ) : (
    <SummarySvg className={className} />
  );

/** ⑧ 【目的外利用なし】 */
export const PrivacyIllustration: React.FC<{ className?: string }> = ({ className }) =>
  USE_STATIC_IMAGES ? (
    <ImageIllustration src="/images/privacy.png" alt="目的外利用なし" className={className} />
  ) : (
    <PrivacySvg className={className} />
  );
