import React from 'react';

interface QuestionFigureProps {
  svg: string;
  caption?: string;
  compact?: boolean;
}

export const QuestionFigure: React.FC<QuestionFigureProps> = ({
  svg,
  caption,
  compact = false,
}) => {
  if (!svg) return null;

  return (
    <figure
      className={`rounded-2xl border border-slate-200 bg-slate-50/80 flex flex-col items-center justify-center ${
        compact ? 'p-2.5 my-2.5 max-w-sm' : 'p-4 my-4'
      }`}
    >
      <div
        className={`w-full flex items-center justify-center [&>svg]:max-w-full [&>svg]:h-auto [&>svg]:rounded-xl ${
          compact ? '[&>svg]:max-h-44' : '[&>svg]:max-h-60'
        }`}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption && (
        <figcaption className="mt-2 text-[11px] font-medium text-slate-500 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
