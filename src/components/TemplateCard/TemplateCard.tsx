import React from "react";
import { formatDate } from "../../helpers/helpers";

interface TemplateCardProps {
  name: string;
  categories: Array<any>;
  date: string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  name,
  categories,
  date,
}) => {
  return (
    <div className="template-card">
      <div>
        <h2>{name}</h2>
        <div>
          Engage your alumni network better with this alumni registration form
          template. Embed this in your website ...
        </div>
        <div>
          {categories?.map((e, i) => (
            <React.Fragment key={i}>
              <div>{e}</div>
            </React.Fragment>
          ))}
        </div>
        <div>Date created: {formatDate(date)}</div>
      </div>
      <div>Use Template</div>
    </div>
  );
};
