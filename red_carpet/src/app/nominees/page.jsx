import Navbar from "@/components/Navbar";
import { data } from "../Data";
import { Accordion, AccordionContent, AccordionItem } from "@radix-ui/react-accordion";
import { AccordionTrigger } from "@/components/ui/accordion";
import Card from "@/components/Card";
import { Button } from "@/components/ui/moving-border";

const Nominee = () => {
    return (
      <div className="flex flex-col items-center min-h-screen">
        <Navbar />
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 border-4  dark:border-slate-800"
      >
        Borders are cool
      </Button>
        <div>
          {data.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger
                 className="text-2xl hover:no-underline">
                  {item.category}
                </AccordionTrigger>
                <AccordionContent>
                  {/* ✅ Pass the whole item, not just item.nominees */}
                  <Card value={item} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    );
  };
  
  export default Nominee;
  