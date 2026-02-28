import React from 'react';

const cn = (cls: string, extra?: string) => (extra ? `${cls} ${extra}` : cls);

/** よりそいブランドカラー: 緑 #84DCC6, ピーチ #FFA69E, ライトブルー #A8D5E5 */
const colors = {
  green: '#84DCC6',
  peach: '#FFA69E',
  blue: '#A8D5E5',
  dark: '#333',
  paper: '#F8FAF9',
};

interface SvgWrapProps {
  className?: string;
  viewBox?: string;
  children: React.ReactNode;
}
const SvgWrap: React.FC<SvgWrapProps> = ({ className, viewBox = '0 0 120 120', children }) => (
  <svg className={cn('w-full h-full object-contain', className)} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);

/** ① ヒーロー：スマホと握手 */
export const ConsultationSvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <rect x="40" y="25" width="40" height="70" rx="6" stroke={colors.dark} strokeWidth="2.5" fill={colors.blue} opacity="0.4" />
    <circle cx="60" cy="50" r="12" fill={colors.dark} />
    <path d="M52 75 L48 85 L55 82 L62 90 L68 78 L75 85" stroke={colors.green} strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M25 55 Q25 35 45 40 L50 42" stroke={colors.peach} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <ellipse cx="22" cy="58" rx="8" ry="6" fill={colors.peach} opacity="0.5" stroke={colors.dark} strokeWidth="1.5" />
  </SvgWrap>
);

/** ② 悩み：混乱 */
export const ConfusedSvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <circle cx="60" cy="55" r="28" fill={colors.blue} opacity="0.3" stroke={colors.dark} strokeWidth="2" />
    <circle cx="52" cy="50" r="4" fill={colors.dark} />
    <circle cx="68" cy="50" r="4" fill={colors.dark} />
    <path d="M48 68 Q60 78 72 68" stroke={colors.dark} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M35 35 L38 28 M45 32 L46 24 M55 30 L54 22 M65 32 L66 24 M75 35 L78 28" stroke={colors.peach} strokeWidth="1.5" strokeLinecap="round" />
  </SvgWrap>
);

/** ② 悩み：育児 */
export const MotherBabySvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <ellipse cx="60" cy="75" rx="28" ry="18" fill={colors.peach} opacity="0.4" stroke={colors.dark} strokeWidth="2" />
    <circle cx="60" cy="48" r="22" fill={colors.peach} opacity="0.5" stroke={colors.dark} strokeWidth="2" />
    <circle cx="60" cy="35" r="12" fill={colors.blue} opacity="0.5" stroke={colors.dark} strokeWidth="1.5" />
    <path d="M50 58 L45 70 M70 58 L75 70" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round" />
  </SvgWrap>
);

/** ② 悩み：家族 */
export const FamilySvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <circle cx="40" cy="45" r="18" fill={colors.blue} opacity="0.4" stroke={colors.dark} strokeWidth="2" />
    <circle cx="80" cy="45" r="18" fill={colors.green} opacity="0.4" stroke={colors.dark} strokeWidth="2" />
    <circle cx="60" cy="75" r="22" fill={colors.peach} opacity="0.4" stroke={colors.dark} strokeWidth="2" />
    <path d="M40 62 L55 85 M80 62 L65 85 M50 85 L70 85" stroke={colors.dark} strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </SvgWrap>
);

/** ③ 操作完了 */
export const NotificationSvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <circle cx="60" cy="60" r="35" fill={colors.green} opacity="0.3" stroke={colors.dark} strokeWidth="2.5" />
    <path d="M42 60 L54 72 L80 44" stroke={colors.green} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </SvgWrap>
);

/** ③ 録音 */
export const RecordingSvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <ellipse cx="60" cy="75" rx="25" ry="12" fill={colors.blue} opacity="0.3" stroke={colors.dark} strokeWidth="2" />
    <rect x="54" y="25" width="12" height="50" rx="6" fill={colors.peach} opacity="0.5" stroke={colors.dark} strokeWidth="2" />
    <circle cx="60" cy="28" r="8" fill={colors.green} opacity="0.6" stroke={colors.dark} strokeWidth="1.5" />
    <path d="M45 45 Q30 60 45 75 M75 45 Q90 60 75 75" stroke={colors.dark} strokeWidth="2" fill="none" strokeLinecap="round" />
  </SvgWrap>
);

/** ④ セキュリティの盾 */
export const SecurityShieldSvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <path d="M60 25 L90 35 V58 C90 78 75 92 60 98 C45 92 30 78 30 58 V35 Z" fill={colors.green} opacity="0.4" stroke={colors.dark} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M42 58 L54 70 L78 46" stroke={colors.dark} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </SvgWrap>
);

/** ④ 安心の医師 */
export const DoctorTrustSvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <circle cx="60" cy="42" r="22" fill={colors.blue} opacity="0.3" stroke={colors.dark} strokeWidth="2" />
    <path d="M60 62 L60 95 M45 78 L75 78" stroke={colors.dark} strokeWidth="2" strokeLinecap="round" />
    <path d="M35 28 L45 32 L48 22 L58 26 L62 18 L72 24 L68 34 L82 38" stroke={colors.green} strokeWidth="2" fill="none" strokeLinecap="round" />
  </SvgWrap>
);

/** ⑤ 患者：AIにお任せ */
export const PatientSvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <circle cx="60" cy="48" r="26" fill={colors.green} opacity="0.3" stroke={colors.dark} strokeWidth="2" />
    <path d="M48 65 Q60 78 72 65" stroke={colors.dark} strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="75" y="35" width="28" height="40" rx="4" fill={colors.blue} opacity="0.4" stroke={colors.dark} strokeWidth="1.5" />
    <path d="M80 45 L92 45 M80 52 L90 52 M80 59 L88 59" stroke={colors.dark} strokeWidth="1.2" strokeLinecap="round" />
  </SvgWrap>
);

/** ⑤ パパ・ママ・お子様 */
export const ParentSvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <ellipse cx="60" cy="82" rx="32" ry="14" fill={colors.peach} opacity="0.35" stroke={colors.dark} strokeWidth="2" />
    <circle cx="60" cy="52" r="20" fill={colors.peach} opacity="0.5" stroke={colors.dark} strokeWidth="2" />
    <circle cx="60" cy="32" r="12" fill={colors.blue} opacity="0.5" stroke={colors.dark} strokeWidth="1.5" />
    <path d="M52 42 L48 52 M68 42 L72 52" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round" />
  </SvgWrap>
);

/** ⑥ AI要約 */
export const SummarySvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <rect x="32" y="28" width="56" height="72" rx="6" fill={colors.paper} stroke={colors.dark} strokeWidth="2" />
    <path d="M42 48 H78 M42 58 H70 M42 68 H65" stroke={colors.green} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="72" cy="38" r="8" fill={colors.peach} opacity="0.5" stroke={colors.dark} strokeWidth="1.5" />
    <path d="M68 38 L72 42 L78 34" stroke={colors.dark} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </SvgWrap>
);

/** ⑥ 目的外利用なし */
export const PrivacySvg: React.FC<{ className?: string }> = ({ className }) => (
  <SvgWrap className={className}>
    <rect x="42" y="35" width="36" height="48" rx="6" fill={colors.blue} opacity="0.3" stroke={colors.dark} strokeWidth="2" />
    <path d="M52 35 V28 C52 22 56 18 60 18 C64 18 68 22 68 28 V35" stroke={colors.dark} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M48 52 L72 52 M48 62 L68 62 M48 72 L65 72" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round" />
  </SvgWrap>
);
