import React from 'react';
import { Tags } from 'types';

const CmpTags = ({ tags }: { tags: Tags[] }): React.ReactElement | null => {
  if (!Boolean(tags)) {
    return null;
  }

  return (
    <>
      {tags.map((tag) => {
        if (tag === Tags.Novinka) {
          return (
            <p className="bg-yellow text-xs text-white w-16 text-center rounded-full mx-2" key={tag}>
              {tag}
            </p>
          );
        } else if (tag === Tags.Tip) {
          return (
            <p className="bg-pink text-xs text-white w-16 text-center rounded-full mx-2" key={tag}>
              {tag}
            </p>
          );
        }

        return (
          <p className="bg-orange text-xs text-white w-16 text-center rounded-full mx-2" key={tag}>
            {tag}
          </p>
        );
      })}
    </>
  );
};
export default CmpTags;
