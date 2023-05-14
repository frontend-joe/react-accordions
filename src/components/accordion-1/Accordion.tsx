import { useRef, useState } from "react";
import "./styles.css";

const faqs = [
  {
    id: 1,
    header: "What is Lorem Ipsum?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 2,
    header: "Where does it come from?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 3,
    header: "Why do we use it?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 4,
    header: "Where can I get some?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
];

const AccordionItem = (props: any) => {
  const contentEl = useRef<HTMLDivElement>(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <header
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <span className="material-symbols-outlined">expand_more</span>
      </header>
      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl?.current?.scrollHeight! }
            : { height: "0px" }
        }
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index: any) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <article>
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        );
      })}
    </article>
  );
};
