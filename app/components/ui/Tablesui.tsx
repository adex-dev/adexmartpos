import { ArrowToLeft, ArrowToRight } from '@boxicons/react';
import React from 'react';
import { Button } from './Button';
import { InputSearch } from './Inputsearch';

type TablesProps = {
  children: React.ReactNode;
  searchHidden?: boolean;
  disabledPrev?: boolean;
  disabledNext?: boolean;
  tHeaders?: string[];
  onChange?: React.ChangeEventHandler<HTMLElement>;
  onPrevClick?: () => void;
  onNextClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const TablesUi: React.FC<TablesProps> = ({
  children,
  searchHidden = false,
  disabledNext = false,
  disabledPrev = false,
  tHeaders,
  onChange,
  onPrevClick,
  onNextClick,
  ...props
}) => {
  return (
    <>
      <div className="mb-2 flex justify-between items-center">
        <div className={`w-64 relative ${searchHidden ? 'hidden' : ''}`}>
          <InputSearch
            autoComplete="off"
            name="search"
            size="xs"
            type="search"
            placeholder="cari product.."
            onChange={onChange}
          />
        </div>
        <div className="flex space-x-3 mt-2">
          <Button
            variant="accent"
            size="xs"
            disabled={disabledPrev}
            className="btn-soft"
            onClick={onPrevClick}
          >
            <ArrowToLeft /> previous
          </Button>
          <Button
            size="xs"
            className="btn-soft"
            disabled={disabledNext}
            onClick={onNextClick}
          >
            Next <ArrowToRight />
          </Button>
        </div>
      </div>
      <div
        className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
        {...props}
      >
        <table className="table table-xs border-collapse overflow-y-auto max-h-[62vh]">
          <thead className="bg-accent text-white">
            <tr>
              {tHeaders?.map((p, ix) => (
                <th key={ix}>{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};
