
export const InputField = ({ icon, name, placeholder, value, onChange, type = "text" }: any) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[var(--color-text-muted)]">
      {icon}
    </div>
    <input
      required
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="h-14 w-full rounded-2xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.7)] pl-12 pr-4 text-[15px] outline-none transition-all focus:border-[var(--color-dark)]/40 focus:bg-white"
    />
  </div>
);