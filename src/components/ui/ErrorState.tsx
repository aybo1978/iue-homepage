interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  dark?: boolean;
}

export function ErrorState({ message = 'Daten konnten nicht geladen werden.', onRetry, dark }: ErrorStateProps) {
  return (
    <div className={`text-center py-16 border ${dark ? 'border-white/10 text-white/50' : 'border-red-100 text-red-400'}`}>
      <p className="font-paragraph text-base mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className={`font-paragraph text-sm uppercase tracking-wider px-6 py-2 border transition-colors ${
            dark
              ? 'border-white/20 text-white/60 hover:bg-white/10'
              : 'border-red-200 text-red-400 hover:bg-red-50'
          }`}
        >
          Erneut versuchen
        </button>
      )}
    </div>
  );
}
